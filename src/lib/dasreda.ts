import { DasredaRoot } from "types/DasredaRoot";

const dasreda = {

  ls_auth: {
    "id": "Z6SlqM",
    "eo_token": "b1e54558e8af53b4f51730db738743609400c7f8d03ead79059942a73a7a3b5f",
    "ws_ticket": "82153e50c11d2dac42c429c994a5ec92bbfe8452a2231e4802122ab7c28340c9"
  },

  setLs_auth(obj: any) {
    this.ls_auth = obj;
  },

  options() {
    const time = new Date().getTime()
    const _time = time % 10000 + 65;
    const parent = this;
    let tokenService = this.ls_auth["eo_token"].split('').map(function (item, index) {
      return parent.ls_auth["eo_token"][_time % (index + 1)];
    }).join('');

    return ({
      headers: {
        Authorization: `Token token=${tokenService}`,
        "Content-Type": "application/json, text/plain, */*",
        Source: "ui",
        Userid: "Z6SlqM",
        Usertime: `${time}`,
      },
      "method": "GET",
      "referrer": "https://partners.dasreda.ru/",
    })
  },

  async getOrder(id: number | string) {
    const _res = await fetch(`https://ppapi.dasreda.ru/api/v1/sber_mq/order/${id}`, this.options())
    const res = await _res.json();
    return res as DasredaRoot;
  }

}

export default dasreda;