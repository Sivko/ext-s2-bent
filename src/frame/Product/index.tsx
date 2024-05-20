import React, { useContext, useEffect } from "react";
import { Ctx } from "../ctx";
import { crm } from "../../lib/crm";
import moment from "moment";
import { FaRegBuilding } from "react-icons/fa6";

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

  return (
    <div className="text-lg p-6">
      <div className="text-2xl font-bold">{itemDSD.number}</div>
      <div className="font-bold text-xl">Клиент</div>
      <div className="flex max-w-[520px] flex-wrap gap-2 text-secondary">
        <div className="flex-[50%]">Клиент</div>
        <div className="flex-[50%]">{itemDSD.company_name}</div>
        <div className="flex-[50%]">ИНН</div>
        <div className="flex-[50%]">{itemDSD.inn}</div>
        <div className="flex-[50%]">ФИО</div>
        <div className="flex-[50%]">{itemDSD.contact_details?.last_name} {itemDSD.contact_details?.first_name} {itemDSD.contact_details?.middle_name}</div>
        <div className="flex-[50%]">Телефон</div>
        <div className="flex-[50%]">{itemDSD.contact_details?.phone}</div>
        <div className="flex-[50%]">Email</div>
        <div className="flex-[50%]">{itemDSD.contact_details?.email}</div>
      </div>
      <div className="font-bold text-xl">Реквизиты</div>
      <div className="flex max-w-[520px] flex-wrap gap-2 text-secondary">
        <div className="flex-[50%]">Партнер</div>
        <div className="flex-[50%]">{}</div>
        <div className="flex-[50%]">Сотрудник</div>
        <div className="flex-[50%]">{}</div>
        <div className="flex-[50%]">Дата создания заявки</div>
        <div className="flex-[50%]">{}</div>
        <div className="flex-[50%]">Направление</div>
        <div className="flex-[50%]">{}</div>
        <div className="flex-[50%]">Тер. банк</div>
        <div className="flex-[50%]">{}</div>
        <div className="flex-[50%]">Тер. менеджер</div>
        <div className="flex-[50%]">{}</div>
      </div>
      <pre>
        {JSON.stringify(itemDSD, null, 2)}
      </pre>
    </div>
  )
}