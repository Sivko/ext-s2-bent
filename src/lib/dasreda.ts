import { DasredaRoot } from "types/DasredaRoot";


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

  async options() {
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
      "method": "GET",
      "referrer": "https://partners.dasreda.ru/",
    })
  },

  async getOrder(id: number | string) {
    console.log("GETORDER")
    let options = await this.options()
    console.log("options", options)
    let _res = await fetch(`https://ppapi.dasreda.ru/api/v1/sber_mq/order/${id}`, options)
    if (_res.status === 401) {
      console.log("login in Service (refresh token)");
      const ls = await this.loginService()
      console.log(ls)
      options = await this.options()
      _res = await fetch(`https://ppapi.dasreda.ru/api/v1/sber_mq/order/${id}`, options)
    }
    const res = (await _res.json());
    return res as DasredaRoot;
  }

}

export default dasreda;