import dasreda from "./lib/dasreda";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    if (message.type == "dasreda_getorder") {
      const id = message.payload.id
      const result = await dasreda.getOrder(id);
      sendResponse(result);
      return;
    }

    if (message.type == "dasreda_create") {
      const result = await dasreda.create(message.payload);
      sendResponse(result)
      return;
    }

    return;
  })();
  return true;
});