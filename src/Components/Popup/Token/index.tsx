import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/context-provider";

function Token() {

  // const [address, setAddress] = useState("")
  // const [token, setToken] = useState("")

  const { token, setToken, address, setAddress, account } = useContext(Context);

  return (<div className="">
    <div className="flex items-center gap-4 animate-fade animate-delay-[200ms]">
      <span className="max-w-[70px] w-[70px] truncate">Адрес СRM</span><input value={address} onChange={e => setAddress(prev => { chrome.storage.local.set({ "address": e.target.value }); return e.target.value })} placeholder="https://app.salesap.ru/" type="text" className="border-solid border-main border-opacity-20 border-0 border-b py-1 outline-none focus:border-opacity-100 transition-all flex-1" />
    </div>
    <div className="flex items-center gap-4 animate-fade animate-delay-[250ms]">
      <span className="max-w-[70px] w-[70px] truncate">Токен</span><input value={token} onChange={e => setToken(prev => { chrome.storage.local.set({ token: e.target.value }); return e.target.value })} placeholder="https://app.salesap.ru/" type="text" className="border-solid border-main border-opacity-20 border-0 border-b py-1 outline-none focus:border-opacity-100 transition-all flex-1" />
    </div>
    <div className="grid grid-cols-3 mt-4">
      <div>
        <div className="truncate animate-fade animate-delay-[260ms]"><span>{account?.userData?.data.attributes.email}</span></div>
        <div className="truncate animate-fade animate-delay-[270ms]"><span>{account?.userData?.data.attributes["last-name"]} {account?.userData?.data.attributes["middle-name"][0]}. {account?.userData?.data.attributes["first-name"][0]}.</span></div>
        <div className="truncate animate-fade animate-delay-[280ms]">Роль: <span>{account?.userData?.data.attributes.role}</span></div>
      </div>
      <div>
        <div className="truncate animate-fade animate-delay-[290ms]">Аккаунт: <span>{account?.userData?.included[0].id}</span></div>
        <div className="truncate animate-fade animate-delay-[300ms]"><span>{account?.userData?.included[0].attributes["company-name"]}</span></div>
      </div>
      <div>
        <div className="truncate animate-fade animate-delay-[310ms]">Подписка: <span>{ `n/a `}</span></div>
        <div className="truncate animate-fade animate-delay-[320ms]">Лимит: <span>{ `n/a `}</span></div>
      </div>
    </div>

  </div>)
}

export default Token