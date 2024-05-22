import axios from "axios";
import { CRMCompanyRoot } from "types/CRMCompanyRoot"
import { CRMDealsRoot } from "types/CRMDealsRoot";
import { crm } from "./crm";


type Types = { [k: string]: string };
const types: Types = {
  Deal: "deals"
}


export const reducers = {

  async getLastCompany() {
    const { lastCompany } = await chrome.storage.local.get(["lastCompany"])
    return lastCompany
  },

  async setLastCompany(data: CRMCompanyRoot) {
    chrome.storage.local.set({ "lastCompany": data })
  },

  async getLastDeal() {
    const { lastOrder } = await chrome.storage.local.get(["lastDeal"])
    return lastOrder
  },

  async setLastDeal(data: CRMCompanyRoot) {
    chrome.storage.local.set({ "lastDeal": data })
  },

  async lastOpenWindowCRM(elem?: HTMLDivElement) {
    if (!elem) return;
    const url = new URL(`${window.location.origin}/${elem.getAttribute("data-source")}`);
    const _type = url.searchParams.get("class_name") as keyof Types
    const type = types[_type]
    const id = url.searchParams.get("entity_id")
    console.log("OPEN", id, type)

    if (!id || type != "deals") return;

    const deal = await crm.getDeal(id);
    if (deal?.included?.length) {
      const company = { data: deal.included[0] } as CRMCompanyRoot
      this.setLastCompany(company)
    } else {
      this.setLastCompany({})
    }
    // this.setLastOrder()
  }
}