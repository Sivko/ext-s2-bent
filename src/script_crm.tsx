import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Window from "./frame/Window";

interface IProps {
  src: string
}

const Content: FC<IProps> = ({ src }) => {


  return (
    <div style={{ overflow: "auto", width: "100%" }}>
      <Window src={src} />
    </div>
  )
}

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (node.nodeName == "IFRAME") {
        const elem = node as HTMLIFrameElement
        if (elem.getAttribute("src")?.includes("example")) {
          const wrapper = elem.parentNode as HTMLDivElement
          wrapper.style.display = "flex"
          render(<Content src={elem.getAttribute("src") ?? ""} />, elem.parentElement)
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

