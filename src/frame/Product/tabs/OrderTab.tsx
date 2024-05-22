import moment from "moment";
import { Ctx } from "../../../frame/ctx";
import React, { useContext } from "react";

export default function OrderTab() {

  const { itemDSD } = useContext(Ctx)

  return (
    <>
      <div className="text-xl font-normal pb-2 pt-4">Клиент</div>
      <div className="flex max-w-[520px] flex-wrap gap-y-2 text-secondary">
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
      <div className="font-normal text-xl pt-4 pb-2">Реквизиты</div>
      <div className="flex max-w-[520px] flex-wrap  gap-y-2 text-secondary mb-2">
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

      <div className="font-normal text-xl pt-4 pb-2">Подразделение банка</div>
      <div className="flex max-w-[520px] gap-y-2 flex-wrap  text-secondary mb-2">
        <div className="w-1/2">Регион</div>
        <div className="w-1/2">{itemDSD.region?.name}</div>
      </div>
    </>
  )
}