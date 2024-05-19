import axios from "axios"
import { useContext } from "react"
import { CRMDealsRoot } from "types/CRMDealsRoot";

export const crm = {
  options: {},

  setOptions(token: string) {
    this.options = {
      headers: { 'Content-Type': 'application/vnd.api+json', 'Authorization': `Bearer ${token}`, Accept: 'application/vnd.api+json' /*'S2-Allow-Websockets': true */ },
    }
    return this;
  },

  address: "",

  async setAddress() {
    // const _address = await chrome.storage.local.get(["address"])
    const _address = "https://app.salesap.ru";
    // this.address = _address.address;
    this.address = this.address;
    return this
  },

  async getOrder(id: number | string) {
    const res = await axios.get(`${this.address}/api/v1/deals/${id}`, this.options) as CRMDealsRoot;
    return res.data;
  }

}