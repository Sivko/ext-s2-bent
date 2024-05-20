import axios, { AxiosRequestConfig } from "axios";
import dasreda from "./lib/dasreda";

console.log("sw-omnibox.js")

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    if (message.type = "dasreda_getorder") {
      const id = message.payload.id
      const result = await dasreda.getOrder(id);
      sendResponse(result);
      return;
    }
  })();


  return true;
});