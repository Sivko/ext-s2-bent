import React, { useContext, useEffect, useState } from "react";
import { Ctx } from "../ctx";
import { crm } from "../../lib/crm";
import OrderTab from "./tabs/OrderTab";
import ProductTab from "./tabs/ProductTab";
import { DasredaRoot } from "types/DasredaRoot";
import NotFind from "./tabs/NotFind";
import { AiOutlineLoading } from "react-icons/ai";

export default function Product({ src = "" }) {


  const { itemDSD, setItemDSD } = useContext(Ctx);
  const [isLoading, setIsLoading] = useState(true);
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

      if (!id || !token) {setIsLoading(false); return true}

      crm.setOptions(token)
      const dasredaOrderId = await crm.getDasredaOrder(id);
      if (!dasredaOrderId) {setIsLoading(false); return true};

      const response = await chrome.runtime.sendMessage({ type: "dasreda_getorder", payload: { id: dasredaOrderId } });
      setItemDSD(response as DasredaRoot);
      setIsLoading(false);
      return true;
    })();
  }, []);

  return (
    <>

      {isLoading && (<div className="w-full h-full flex items-center justify-center">
        <div className="inline animate-spin"><AiOutlineLoading size={125} color="#21BA72" /></div>
      </div>)}
      {!isLoading && (<div className="text-lg p-6">
        <div className="text-2xl font-bold">{itemDSD.number}</div>

        {itemDSD?.id && (<div className="flex mb-2">
          <button onClick={() => setActiveTab(0)} className={`py-2 px-3 border-2 border-white ${activeTab == 0 ? "border-b-main" : "opacity-70"}`}>Заявка</button>
          <button onClick={() => setActiveTab(1)} className={`py-2 px-3 border-2 border-white ${activeTab == 1 ? "border-b-main" : "opacity-70"}`}>Продукты</button>
        </div>)}

        {itemDSD?.id && <ActComponent />}
        {!itemDSD?.id && <NotFind />}
      </div>)}
    </>
  )
}