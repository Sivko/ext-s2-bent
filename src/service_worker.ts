import axios, { AxiosRequestConfig } from "axios";
import dasreda from "./lib/dasreda";

console.log("sw-omnibox.js")

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    if (message === "getOrder") {
      const result = await dasreda.getOrder(3679489);
      sendResponse(result);
    }
  })();


  return true;
});