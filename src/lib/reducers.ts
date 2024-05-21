import axios from "axios";
import { CRMCompanyRoot } from "types/CRMCompanyRoot"
import { CRMDealsRoot } from "types/CRMDealsRoot";


type Types = { [k: string]: string };
const types: Types = {
  Order: "order"
}


export const reducers = {

  async getLastCompany() {
    const { lastCompany } = await chrome.storage.local.get(["lastCompany"])
    return lastCompany
  },

  async setLastCompany(data: CRMCompanyRoot) {
    chrome.storage.local.set({ "lastOrder": data })
  },

  async getLastOrder() {
    const { lastOrder } = await chrome.storage.local.get(["lastOrder"])
    return lastOrder
  },

  async setLastOrder(data: CRMCompanyRoot) {
    chrome.storage.local.set({ "lastOrder": data })
  },

  async lastOpenWindowCRM(elem?: HTMLDivElement) {
    if (!elem) return;
    const url = new URL(`${window.location.origin}/${elem.getAttribute("data-source")}`);
    const _type = url.searchParams.get("class_name") as keyof Types
    const type = types[_type]
    if (type !== "order") return;
    const id = url.searchParams.get("entity_id")
    console.log("OPEN")
    const order = await (await axios.get(`${process.env.CRM}/api/v1/orders/${id}?include=companies`, { withCredentials: true })).data as CRMDealsRoot
    if (order.included) {
      const company = order.included[0] as CRMCompanyRoot
      // this.setLastCompany({ data: company })
    } else {
      reducers.setLastCompany({})
    }
    // this.setLastOrder()
  }
}