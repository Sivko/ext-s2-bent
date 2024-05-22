import React from "react";

export default function NotFind() {
  return (<div className="">
    <div className="text-2xl pb-4">Заявка не указана :(</div>
    <p>создайте <a className="text-main underline" href="https://partners.dasreda.ru/orders_redesign/edit/0" target="_blank">новую заявку</a> или укажите ID в поле "dasredaOrderId"</p>
  </div>)
}