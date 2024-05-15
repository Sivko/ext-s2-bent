import axios from "axios";
import { initCombineDublication } from "./combineDuplicates";

chrome.runtime.onMessage.addListener((msg, sender, callback) => {

  console.log(msg, sender)
});


const init = async () => {
}

chrome.runtime.sendMessage('test', async (response) => {
  // console.log("Response Woker in UI AAA", "ИИИ");
  console.log(response)
  return response
});

init()




