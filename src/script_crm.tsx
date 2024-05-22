import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Window from "./frame/Window";
import axios from "axios";
import { reducers } from "./lib/reducers";

interface IProps {
  src: string
}

const dealWindowId = "#informers-container"

const Content: FC<IProps> = ({ src }) => {


  return (
    <div className="flex h-full">
      <div className="overflow-auto w-full">
        <Window src={src} />
      </div>
    </div>
  )
}

let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {

      if (node.nodeName == "DIV") {
        const elem = node as HTMLDivElement

        if (elem.querySelector(dealWindowId)) {
          const el = elem.querySelector(dealWindowId) as HTMLDivElement
          reducers.lastOpenWindowCRM(el)
        }
      }


      if (node.nodeName == "IFRAME") {
        const elem = node as HTMLIFrameElement
        if (elem.getAttribute("src")?.includes("example")) {
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







window.onload = function () {
  const elem = document.querySelector(dealWindowId) as HTMLDivElement
  reducers.lastOpenWindowCRM(elem)
}