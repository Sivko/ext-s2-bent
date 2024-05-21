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
      <div className="flex max-w-[520px] flex-wrap  text-secondary">
        <div className="w-1/2">Клиент</div>
        <div className="w-1/2">{itemDSD.company_name}</div>
        <div className="w-1/2">ИНН</div>
        <div className="w-1/2">{itemDSD.inn}</div>
        <div className="w-1/2">ФИО</div>
        <div className="w-1/2">{itemDSD.contact_details?.last_name} {itemDSD.contact_details?.first_name} {itemDSD.contact_details?.middle_name}</div>
        <div className="w-1/2">Телефон</div>
        <div className="w-1/2">{itemDSD.contact_details?.phone}</div>
        <div className="w-1/2">Email</div>
        <div className="w-1/2">{itemDSD.contact_details?.email}</div>
      </div>
      <div className="font-bold text-xl">Реквизиты</div>
      <div className="flex max-w-[520px] flex-wrap  text-secondary mb-2">
        <div className="w-1/2">Партнер</div>
        <div className="w-1/2">{itemDSD.partner?.name}</div>
        <div className="w-1/2">Сотрудник</div>
        <div className="w-1/2">{itemDSD.created_by_user?.name}</div>
        <div className="w-1/2">Дата создания заявки</div>
        <div className="w-1/2">{moment(itemDSD.created_at).format("DD.MM.YYYY hh:mm")}</div>
        <div className="w-1/2">Направление</div>
        <div className="w-1/2">{itemDSD.user_channel}</div>
        <div className="w-1/2">Тер. банк</div>
        <div className="w-1/2">{itemDSD.manager?.territorial_bank.name}</div>
        <div className="w-1/2">Тер. менеджер</div>
        <div className="w-1/2">{itemDSD.manager?.name}</div>
      </div>

      <div className="font-bold text-xl">Подразделение банка</div>
      <div className="flex max-w-[520px] flex-wrap  text-secondary mb-2">
        <div className="w-1/2">Регион</div>
        <div className="w-1/2">{itemDSD.region?.name}</div>
      </div>


      <pre>
        {JSON.stringify(itemDSD, null, 2)}
      </pre>
    </div>
  )
}