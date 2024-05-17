import React, { FC, ReactElement, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Window from "./frame/Window";

interface IProps { }

const Content: FC<IProps> = () => {

  const [item, setItem] = useState({});

  useEffect(() => {
    // (async () => {
    //   const response = await chrome.runtime.sendMessage("getOrder");
    //   setItem(response);
    // })();
  }, []);

  return (
    <>
      <Window />
    </>
  )
}

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (node.nodeName=="IFRAME") {
        const elem = node as HTMLIFrameElement
        if (elem.getAttribute("src")?.includes("example")) {
          console.log("Render")
          render(<Content />, elem.parentElement)
        }
      }
    }
  }
});

const body = document.querySelector("body") as HTMLBodyElement;
observer.observe(body, {
  childList: true, 
  subtree: true, 
  characterDataOldValue: false 
});

