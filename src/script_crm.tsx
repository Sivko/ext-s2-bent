import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Window from "./frame/Window";
import { Ctx } from "./frame/ctx";
import { crm } from "./lib/crm";

interface IProps {
  src: string
}

const Content: FC<IProps> = ({ src }) => {

  const { setIframeSrc, setToken, token, setItemCRM } = useContext(Ctx)

  useEffect(() => {
    (async () => {
      const uri = new URL(src)
      const id = uri.searchParams.get("ids[]")
      const token = uri.searchParams.get("token") ?? "";

      if (!id || !token) return;

      await crm.setAddress(window.location.origin)
      crm.setOptions(token)
      const dasredaOrderId = await crm.getDasredaOrder(id);

      


    })();
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
      if (node.nodeName == "IFRAME") {
        const elem = node as HTMLIFrameElement
        if (elem.getAttribute("src")?.includes("example")) {
          console.log("Render")
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

