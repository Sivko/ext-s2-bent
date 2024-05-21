import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Window from "./frame/Window";
import axios from "axios";

interface IProps {
  src: string
}

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

        if (elem.querySelector("#informers-container")) {
          const el = elem.querySelector("#informers-container") as HTMLDivElement
          lastOpenWindowCRM(el)
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


type Types = { [k: string]: string };
const types: Types = {
  Order: "order"
}

const lastOpenWindowCRM = async (elem?: HTMLDivElement) => {
  if (!elem) return;
  const url = new URL(`${window.location.origin}/${elem.getAttribute("data-source")}`);
  const _type = url.searchParams.get("class_name") as keyof Types
  const type = types[_type]
  if (type !== "order") return;
  const id = url.searchParams.get("entity_id")
  console.log("OPEN", `${process.env.CRM}/api/v1/orders/${id}?include=companies`)
}


window.onload = function(){
  const elem = document.querySelector("#informers-container") as HTMLDivElement
  lastOpenWindowCRM(elem)
}