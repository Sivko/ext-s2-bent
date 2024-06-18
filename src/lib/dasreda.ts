import { DasredaRoot } from "types/DasredaRoot";
import { haveInvoceSB, notToHaveInvoceSB } from "@/helpers/dataCreateDS";
import { ResponseCreateOrderDSRoot } from "types/ResponseCreateOrderDSRoot";
import { crm } from "./crm";
import { reducers } from "./reducers";

interface AuthResponse {
  "id": string,
  "eo_token": string,
  "ws_ticket": string
}

interface Auth {
  eo_token: string,
  id: string,
}



const dasreda = {

  serviceAuthPayload: {
    headers: {
      "Content-Type": "application/json, text/plain, */*",
      Source: "ui",
    },
    "method": "POST",
    body: JSON.stringify({
      data: {
        password: process.env.DASREDA_PASS,
        username: process.env.DASREDA_LOGIN
      }
    })
  },

  async loginService() {
    const _res = await fetch('https://ppapi.dasreda.ru/api/v1/login', this.serviceAuthPayload)
    const res = (await _res.json()) as AuthResponse
    console.log("loginService", res)
    await chrome.storage.local.set({ "auth": res })
    return res;
  },

  async options({ method = "GET", body = null }: { method?: string, body?: any }) {
    const time = new Date().getTime()
    const _time = time % 10000 + 65;

    const { id, eo_token } = (await chrome.storage.local.get("auth")).auth as Auth
    let tokenService

    if (eo_token) {
      tokenService = eo_token.split('').map(function (item, index) {
        return eo_token[_time % (index + 1)];
      }).join('');
    }

    return ({
      headers: {
        Authorization: `Token token=${tokenService}`,
        "Content-Type": "application/json, text/plain, */*",
        Source: "ui",
        Userid: `${id}`,
        Usertime: `${time}`,
      },
      body: body,
      "method": method,
      "referrer": "https://partners.dasreda.ru/",
    })
  },

  async getOrder(id: number | string) {
    let options = await this.options({})
    console.log("options", options)
    let _res = await fetch(`https://ppapi.dasreda.ru/api/v1/sber_mq/order/${id}`, options)
    if (_res.status === 401) {
      console.log("login in Service (refresh token)");
      const ls = await this.loginService()
      console.log(ls)
      options = await this.options({})
      _res = await fetch(`https://ppapi.dasreda.ru/api/v1/sber_mq/order/${id}`, options)
    }
    const res = (await _res.json());
    return res as DasredaRoot;
  },


  async create(body: any) {
    const { inn, company, lastName, firstName, middleName, phone, email, region, kpp, ogrn, hasInvoceSB } = body
    const formData = new FormData()
    if (hasInvoceSB) {
      haveInvoceSB({ inn, company, lastName, firstName, middleName, phone, email, region, kpp, ogrn }).split("\n").map((e: string) => {
        formData.append(e.split(":")[0], e.split(":")[1]);
        return (``)
      })
    } else {
      notToHaveInvoceSB({ inn, company, lastName, firstName, middleName, phone, email, region, kpp, ogrn }).split("\n").map((e: string) => {
        formData.append(e.split(":")[0], e.split(":")[1]);
        return (``)
      })
    }

    try {
      let options = await this.options({ method: "POST", body: formData })
      const _res = await fetch(`https://webhook.site/2afdd92c-19f3-428e-957f-6c3b9d0ae1e8`, options);
      const idDeal = (await reducers.getLastDeal()).data?.id
      if (_res.ok && idDeal) {
        const res = await _res.json() as ResponseCreateOrderDSRoot
        await crm.setDasredaId(idDeal, res.id)
      } else { return "Не указан idDeal"}
      // return res
    } catch (err) { console.log(err); return err }
  }

}

export default dasreda;