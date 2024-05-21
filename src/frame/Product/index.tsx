import React, { useContext, useEffect, useState } from "react";
import { Ctx } from "../ctx";
import { crm } from "../../lib/crm";
import moment from "moment";
import { FaRegBuilding } from "react-icons/fa6";
import OrderTab from "./tabs/OrderTab";
import ProductTab from "./tabs/ProductTab";

export default function Product({ src = "" }) {


  const { itemDSD, setItemDSD } = useContext(Ctx);

  const [activeTab, setActiveTab] = useState(0);

  const ActComponent = () => {
    const ActElem = [OrderTab, ProductTab][activeTab];
    return <ActElem />
  }

  useEffect(() => {
    (async () => {
      const uri = new URL(src)
      const id = uri.searchParams.get("ids[]")
      const token = uri.searchParams.get("token") ?? "";

      if (!id || !token) return;

      crm.setOptions(token)
      const dasredaOrderId = await crm.getDasredaOrder(id);
      if (!dasredaOrderId) return;

      const response = await chrome.runtime.sendMessage({ type: "dasreda_getorder", payload: { id: dasredaOrderId } });
      setItemDSD(response);
    })();
  }, []);

  return (
    <div className="text-lg p-6">
      <div className="text-2xl font-bold">{itemDSD.number}</div>

      <div className="flex mb-2">
        <button onClick={() => setActiveTab(0)} className={`py-2 px-3 border border-white ${activeTab == 0 ? "border-b-main" : "opacity-70"}`}>Заявка</button>
        <button onClick={() => setActiveTab(1)} className={`py-2 px-3 border border-white ${activeTab == 1 ? "border-b-main" : "opacity-70"}`}>Продукты</button>
      </div>

      {<ActComponent />}

    </div>
  )
}