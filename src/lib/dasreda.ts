import { DasredaRoot } from "types/DasredaRoot";
import { DS1, DS2 } from "@/helpers/dataCreateDS";

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
    if (!hasInvoceSB) {
      DS1({ inn, company, lastName, firstName, middleName, phone, email, region, kpp, ogrn }).split("\n").map((e: string) => {
        formData.append(e.split(":")[0], e.split(":")[1]);
        return (``)
      })
    } else {
      DS2({ inn, company, lastName, firstName, middleName, phone, email, region, kpp, ogrn }).split("\n").map((e: string) => {
        formData.append(e.split(":")[0], e.split(":")[1]);
        return (``)
      })
    }
    const _res = await fetch(`https://webhook.site/2afdd92c-19f3-428e-957f-6c3b9d0ae1e8`, {
      method: 'post',
      body: formData
    });
    const res = await _res.json()
    
    return res
  }

}

export default dasreda;