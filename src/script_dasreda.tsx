import mask from "./helpers/mask";
import { reducers } from "./lib/reducers";

if (window.location.origin == "https://partners.dasreda.ru") {
  const auth = JSON.parse(localStorage.getItem("pp.admin.session") ?? "").auth
  console.log("auth", auth);
  chrome.storage.local.set({ auth: { ...auth, time: Date.now() } })
}


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type = "dasreda_test") {

    const inputCompany = document.querySelector("#orders\\\/edit_order_company_name") as HTMLInputElement
    const lastName = document.querySelector("#orders\\\/edit_order_last_name") as HTMLInputElement
    const firstName = document.querySelector("#orders\\\/edit_order_first_name") as HTMLInputElement
    const middleName = document.querySelector("#orders\\\/edit_order_middle_name") as HTMLInputElement
    const phone = document.querySelector("#orders\\\/edit_order_phone") as HTMLInputElement
    const email = document.querySelector("#orders\\\/edit_order_email") as HTMLInputElement
    const amount = document.querySelector("#orders\\\/edit_order_deal_amount") as HTMLInputElement

    const event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, false);

    (async () => {
      const lastDeal = await reducers.getLastDeal()
      const lastCompany = await reducers.getLastCompany()

      inputCompany.value = lastCompany.data?.attributes["full-name"]
      inputCompany.dispatchEvent(event);
      lastName.value = lastCompany.data?.attributes["manager-name"].split(" ")[0]
      lastName.dispatchEvent(event);
      firstName.value = lastCompany.data?.attributes["manager-name"].split(" ")[1]
      firstName.dispatchEvent(event);
      middleName.value = lastCompany.data?.attributes["manager-name"].split(" ")[2]
      middleName.dispatchEvent(event);
      phone.value = mask(lastCompany.data?.attributes["general-phone"])
      phone.dispatchEvent(event);
      email.value = lastCompany.data?.attributes.email ?? ""
      email.dispatchEvent(event);
      amount.value = lastDeal.data?.attributes.amount ?? ""
      amount.dispatchEvent(event);
    })()
    return true;
  }
})