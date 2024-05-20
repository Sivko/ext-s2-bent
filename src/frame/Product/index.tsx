import React, { useContext, useEffect } from "react";
import { Ctx } from "../ctx";
import { crm } from "../../lib/crm";

export default function Product({ src = "" }) {


  const { itemDSD, setItemDSD } = useContext(Ctx);

  useEffect(() => {
    (async () => {
      const uri = new URL(src)
      const id = uri.searchParams.get("ids[]")
      const token = uri.searchParams.get("token") ?? "";

      if (!id || !token) return;

      await crm.setAddress(window.location.origin)
      crm.setOptions(token)
      const dasredaOrderId = await crm.getDasredaOrder(id);
      if (!dasredaOrderId) return;

      const response = await chrome.runtime.sendMessage({ type: "dasreda_getorder", payload: { id: dasredaOrderId } });
      setItemDSD(response);
    })();
  }, []);

  return (<div>
    <pre>{JSON.stringify(itemDSD, null, 2)}</pre>
  </div>)
}