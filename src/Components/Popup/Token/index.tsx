import React, { useEffect, useState } from "react";
import moment from "moment";
import dasreda from "@/lib/dasreda";
import { crm } from "@/lib/crm";
import { CRMCompanyRoot } from "types/CRMCompanyRoot";
import { reducers } from "@/lib/reducers";
import { CRMDealsRoot } from "types/CRMDealsRoot";

function Token() {

  const [createTimeTokenDasreda, setCreateTimeTokenDasreda] = useState(0)
  const [token, setToken] = useState("")
  const [lastCompany, setLastCompany] = useState<CRMCompanyRoot>({})
  const [lastDeal, setLastDeal] = useState<CRMDealsRoot>({})


  const handlerClick = async () => {
    let queryOptions = { active: true, currentWindow: true };
    let tab = await chrome.tabs.query(queryOptions);
    if (!tab[0].id) return
    chrome.tabs.sendMessage(tab[0].id, { type: "dasreda_test" });
    return true;
  }

  useEffect(() => {
    (async () => {
      const time = await dasreda.getCreateTimeToken()
      setCreateTimeTokenDasreda(time)

      const _token = await crm.getToken() as string
      setToken(_token);

      const _lastCompany = await reducers.getLastCompany();
      setLastCompany(_lastCompany);

      const _lastDeal = await reducers.getLastDeal();
      setLastDeal(_lastDeal);
    })()
  }, [])

  return (<div className="flex justify-between flex-col h-full">
    <div className="text-sm text-secondary">
      <div className="flex flex-wrap">
        <div className="w-1/2">Сделка</div>
        <div className="w-1/2"><a href={`${process.env.CRM}/deals/${lastDeal?.data?.id}`} target="_blank">{lastDeal?.data?.attributes.name}</a></div>
        <div className="w-1/2">Компания</div>
        <div className="w-1/2"><a href={`${process.env.CRM}/companies/${lastCompany.data?.id}`} target="_blank">{lastCompany.data?.attributes.name}</a></div>
        <div className="w-1/2">Руководитель</div>
        <div className="w-1/2">{lastCompany.data?.attributes["manager-name"]}</div>
        <div className="w-1/2">Телефон</div>
        <div className="w-1/2">{lastCompany.data?.attributes["general-phone"]}</div>
        <div className="w-1/2">ИНН</div>
        <div className="w-1/2">{lastCompany.data?.attributes.inn}</div>
        <div className="w-1/2">E-mail</div>
        <div className="w-1/2">{lastCompany.data?.attributes.email}</div>
      </div>
    </div>
    <div className="flex flex-wrap text-xs text-secondary">

      <button onClick={handlerClick} className="w-full bg-main text-white mb-2 rounded py-2 outline-none border-none cursor-pointer">Заполнить данные</button>

      <div className="w-1/2">CRM</div>
      {token && <div className="w-1/2 truncate">{token}</div>}
      {!token && <div className="w-1/2">Ключ не найден</div>}
      <div className="w-1/2">Dasreda</div>
      {createTimeTokenDasreda && <div className="w-1/2"> Ключ от {moment(createTimeTokenDasreda).format("DD.MM.YYYY")}</div>}
      {!createTimeTokenDasreda && <div className="w-1/2"><a href={process.env.DASREDA} target="_blank">Авторизоваться</a></div>}
    </div>



  </div>)
}

export default Token