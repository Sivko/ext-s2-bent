import { DasredaRoot } from "types/DasredaRoot";


interface Auth {
  eo_token: string,
  id: string,
  time: number,
}

const dasreda = {

  async getCreateTimeToken(){
    const { time } = (await chrome.storage.local.get("auth")).auth as Auth
    return time
  },

  async options() {
    const time = new Date().getTime()
    const _time = time % 10000 + 65;

    const { id, eo_token } = (await chrome.storage.local.get("auth")).auth as Auth
    let tokenService = eo_token.split('').map(function (item, index) {
      return eo_token[_time % (index + 1)];
    }).join('');

    console.log(tokenService, "tokenService")

    return ({
      headers: {
        Authorization: `Token token=${tokenService}`,
        "Content-Type": "application/json, text/plain, */*",
        Source: "ui",
        Userid: id,
        Usertime: `${time}`,
      },
      "method": "GET",
      "referrer": "https://partners.dasreda.ru/",
    })
  },

  async getOrder(id: number | string) {
    const options = await this.options()
    const _res = await fetch(`https://ppapi.dasreda.ru/api/v1/sber_mq/order/${id}`, options)
    const res = await _res.json();
    return res as DasredaRoot;
  }

}

export default dasreda;