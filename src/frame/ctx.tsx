import ky from "ky"
import React, { SetStateAction, createContext, useEffect, useState } from "react"
import { TokenRootInterface } from "../types/token"
import { UserRootInterface } from "../types/user"
import { DasredaRoot } from "types/DasredaRoot"

interface Account {
  tokenData?: TokenRootInterface
  userData?: UserRootInterface
}
interface Theme {
  account?: Account,
  setAccount: React.Dispatch<React.SetStateAction<any>>,
  address: string,
  setAddress: React.Dispatch<React.SetStateAction<string>>,
  token: string,
  setToken: React.Dispatch<React.SetStateAction<string>>,
  options: any
  setItemCRM: React.Dispatch<React.SetStateAction<any>>,
  itemCRM: any,
  setItemDSD: React.Dispatch<React.SetStateAction<any>>,
  itemDSD: DasredaRoot,
  iframeSrc: string,
  setIframeSrc: React.Dispatch<React.SetStateAction<string>>,
}

export const Ctx = createContext<Theme>({
  account: {},
  setAccount: () => { },
  address: "",
  setAddress: () => { },
  token: "",
  setToken: () => { },
  options: {},
  setItemCRM: () => { },
  itemCRM: {},
  setItemDSD: () => { },
  itemDSD: {},
  iframeSrc: "",
  setIframeSrc: () => { }
})

async function init({ setAccount, setAddress, setToken, setOptions }: { setAccount: SetStateAction<any>, setAddress: SetStateAction<any>, setToken: SetStateAction<any>, setOptions: SetStateAction<any> }) {
  const account = await chrome.storage.local.get(["account"])
  const address = await chrome.storage.local.get(["address"])
  // const token = await chrome.storage.local.get(["token"])
  const options = await chrome.storage.local.get(["options"])

  setAccount(account.account ?? {})
  console.log("account.account", account.account,)
  setAddress(address?.address == "" ? "https://app.salesap.ru" : address?.address)
  // setToken(token.token ?? "")
  setOptions(options.options ?? {})
}


function CtxProvider({ children }: Readonly<{ children: React.ReactNode; }>) {
  const [options, setOptions] = useState<any>({})
  const [account, setAccount] = useState<Account>({});
  const [token, setToken] = useState("");
  const [address, setAddress] = useState("")
  const [itemCRM, setItemCRM] = useState({})
  const [itemDSD, setItemDSD] = useState({})
  const [iframeSrc, setIframeSrc] = useState("")

  useEffect(() => {
    init({ setAccount, setToken, setAddress, setOptions })
  }, [])

  useEffect(()=>{

  },[address, token,])


  return <Ctx.Provider value={{ account, setAccount, address, token, setAddress, setToken, options, itemCRM, itemDSD, iframeSrc, setIframeSrc, setItemCRM, setItemDSD }}>
    {children}
  </Ctx.Provider>
}

export default CtxProvider;