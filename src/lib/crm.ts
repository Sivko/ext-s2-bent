import axios from "axios"
import { CRMDealsRoot, Customs } from "types/CRMDealsRoot";


const rules = {
  fieldDasredaId: "custom-112404" as keyof Customs
}

export const crm = {
  options: {},

  async getToken() {
    const { token } = await chrome.storage.local.get(["token"]);
    return token;
  },

  setOptions(token: string) {
    chrome.storage.local.set({ "token": token });
    this.options = {
      headers: { 'Content-Type': 'application/vnd.api+json', 'Authorization': `Bearer ${token}`, Accept: 'application/vnd.api+json' /*'S2-Allow-Websockets': true */ },
    }
    return this;
  },

  async getDeal(id: number | string) {
    const res = await axios.get(`${process.env.CRM}/api/v1/deals/${id}?include=companies`, { withCredentials: true });
    return res.data as CRMDealsRoot;
  },

  async getDasredaDeal(id: number | string) {
    const _res = await axios.get(`${process.env.CRM}/api/v1/deals/${id}`, { withCredentials: true });
    const res = _res.data as CRMDealsRoot
    return res.data?.attributes.customs[rules.fieldDasredaId];
  },

  async setDasredaId(idCRM: number | string, idDasreda: number | string) {
    const data = {
      data: {
        type: "deals",
        id: idCRM,
        attributes:
        {
          customs: { [rules.fieldDasredaId]: idDasreda }
        }
      }
    }
    await axios.patch(`${process.env.CRM}/api/v1/deals/${idCRM}`, data, this.options)
  }

}