import axios from "axios";

console.log("sw-omnibox.js")

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'test') {
    console.log("LIST RESPONSE2")
    const time = new Date().getTime();
    const x = await fetch("https://ppapi.dasreda.ru/api/v1/sber_mq/order/3670666",
      {
        headers: {
          Authorization: "Token token=77f1fc11f51a51fa7a152b5a15a1a2aae72a2533e295f5eaf8591ae15af3f8e5",
          "Content-Type": "application/json, text/plain, */*",
          Source: "ui",
          Userid: "Z6SlqM",
          Usertime: `${time}`,
        },
        "referrer": "https://partners.dasreda.ru/",
        "referrerPolicy": "origin",
        "mode": "cors",
        "credentials": "include"
      }
    )
    sendResponse(x);
  }
});