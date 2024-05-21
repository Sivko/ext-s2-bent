import React, { useEffect, useState } from "react";
import moment from "moment";
import dasreda from "@/lib/dasreda";
import { crm } from "@/lib/crm";
import { CRMCompanyRoot } from "types/CRMCompanyRoot";
import { reducers } from "@/lib/reducers";

function Token() {

  const [createTimeTokenDasreda, setCreateTimeTokenDasreda] = useState(0)
  const [token, setToken] = useState("")
  const [lastCompany, setLastCompany] = useState<CRMCompanyRoot>({})

  useEffect(() => {
    (async () => {
      const time = await dasreda.getCreateTimeToken()
      setCreateTimeTokenDasreda(time)

      const _token = await crm.getToken() as string
      setToken(_token);

      const _lastCompany = await reducers.getLastCompany();
      setLastCompany(_lastCompany);
    })()
  })

  return (<div className="flex justify-between flex-col h-full">
    <div className="text-sm text-secondary">
      <div className="flex flex-wrap">
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
      <div className="w-1/2">CRM</div>
      {token && <div className="w-1/2">{token}</div>}
      {!token && <div className="w-1/2">Ключ не найден</div>}
      <div className="w-1/2">Dasreda</div>
      {createTimeTokenDasreda && <div className="w-1/2"> Ключ от {moment(createTimeTokenDasreda).format("DD.MM.YYYY")}</div>}
      {!createTimeTokenDasreda && <div className="w-1/2"><a href={process.env.DASREDA} target="_blank">Авторизоваться</a></div>}
    </div>
    {/* <div className="flex items-center gap-4 animate-fade animate-delay-[200ms]">
      <span className="max-w-[70px] w-[70px] truncate">Адрес СRM</span><input value={address} onChange={e => setAddress(prev => { chrome.storage.local.set({ "address": e.target.value }); return e.target.value })} placeholder="https://app.salesap.ru/" type="text" className="border-solid border-main border-opacity-20 border-0 border-b py-1 outline-none focus:border-opacity-100 transition-all flex-1" />
    </div>
    <div className="flex items-center gap-4 animate-fade animate-delay-[250ms]">
      <span className="max-w-[70px] w-[70px] truncate">Токен</span><input value={token} onChange={e => setToken(prev => { chrome.storage.local.set({ token: e.target.value }); return e.target.value })} placeholder="https://app.salesap.ru/" type="text" className="border-solid border-main border-opacity-20 border-0 border-b py-1 outline-none focus:border-opacity-100 transition-all flex-1" />
    </div>
    <div className="grid grid-cols-3 mt-4">
      <div>
        <div className="truncate animate-fade animate-delay-[260ms]"><span>{account?.userData?.data.attributes.email}</span></div>
        <div className="truncate animate-fade animate-delay-[270ms]"><span>{username}</span></div>
        <div className="truncate animate-fade animate-delay-[280ms]">Роль: <span>{account?.userData?.data.attributes.role}</span></div>
      </div>
      <div>
        <div className="truncate animate-fade animate-delay-[290ms]">Аккаунт: <span>{account?.userData?.included[0].id}</span></div>
        <div className="truncate animate-fade animate-delay-[300ms]"><span>{account?.userData?.included[0].attributes["company-name"]}</span></div>
      </div>
      <div>
        <div className="truncate animate-fade animate-delay-[310ms]">Подписка: <span>{`n/a `}</span></div>
        <div className="truncate animate-fade animate-delay-[320ms]">Лимит: <span>{`n/a `}</span></div>
      </div>
    </div> */}

  </div>)
}

export default Token