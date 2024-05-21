import moment from "moment";
import { Ctx } from "../../../frame/ctx";
import React, { useContext } from "react";

export default function ProductTab() {

  const { itemDSD } = useContext(Ctx)

  return (<>
    {itemDSD.products?.map((item, index) => (
      <div>
        <div className="font-bold text-xl" key={index}>{item.product.name}</div>
        <div className="flex max-w-[520px] flex-wrap  text-secondary">
          <div className="w-1/2">Внешний ID</div>
          <div className="w-1/2">{item.external_id}</div>
        </div>

        <div className="bg-white rounded text-sm py-2">
          {itemDSD.product_order_relations?.filter((product) => item.product.id == product.product_id)?.reverse().map((item, idx) => (
            <div className="" key={idx}>
              {item.events.map((evt, idx2) => (<div key={idx2} className="flex flex-wrap">
                <div className="w-1/2">{evt.status}</div>
                <div className="w-1/2 text-secondary">{moment(evt.created_at).format("DD.MM.YYYY hh:mm")}</div>
                <div className="w-full text-secondary">{evt.change_status_reason}</div>
              </div>))}
            </div>))}
        </div>

      </div>
    ))}


  </>)
}