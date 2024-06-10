import Combobox from "@/Components/Combobox";
import mask from "@/helpers/mask";
import { regionList } from "@/helpers/regions";
import { reducers } from "@/lib/reducers";
import React, { useEffect, useState } from "react";

export default function Create() {

  const [inn, setInn] = useState("");
  const [kpp, setKpp] = useState("");
  const [ogrn, setOgrn] = useState("");
  const [company, setCompany] = useState("");
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")

  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [region, setRegion] = useState({ name: "Не указано" })



  const [hasInvoceSB, setHasInvoceSB] = useState(false);

  useEffect(() => {
    (async () => {
      const lastCompany = await reducers.getLastCompany()
      setInn(lastCompany.data?.attributes.inn ?? "")
      setOgrn(lastCompany.data?.attributes.ogrn ?? "")
      setKpp(lastCompany.data?.attributes.kpp ?? "")

      setCompany(lastCompany.data?.attributes["full-name"])
      setLastName(lastCompany.data?.attributes["manager-name"].split(" ")[0])
      setFirstName(lastCompany.data?.attributes["manager-name"].split(" ")[1])
      setMiddleName(lastCompany.data?.attributes["manager-name"].split(" ")[2])

      setPhone(lastCompany.data?.attributes["general-phone"] ? lastCompany.data?.attributes["general-phone"] : "")
      setEmail(lastCompany.data?.attributes.email)
      // setHasInvoceSB()
      const _region = lastCompany.data?.attributes.region.toLowerCase()
      if (!_region) return
      // debugger
      setRegion(regionList.filter(e => _region.includes(e.name.toLowerCase()))[0] || { name: "не найдено" })
    })()
  }, [])

  async function sendForm(e: React.FormEvent) {
    e.preventDefault()
    // const await fetch()
    const response = await chrome.runtime.sendMessage({
      type: "dasreda_create", payload: {
        inn, company, lastName, firstName, middleName, phone, email, region, kpp, ogrn, hasInvoceSB 
      }
    });
    console.log(response)
  }

  return (
    <div>
      <h1 className="font-bold text-[25px] my-4">Новая заявка</h1>
      <form onSubmit={sendForm} className="flex flex-col gap-3">

        {/* <div className="border-outline border rounded max-w-[400px] w-full flex items-center gap-2" > */}
        <div className="bg-white  text-xs pb-2">У клиента есть расчетный счет в СБ?</div>
        <div className="flex gap-3">
          <div onClick={() => setHasInvoceSB(true)} className={`${hasInvoceSB ? "bg-main" : "bg-secondary"}  cursor-pointer text-xs text-white px-4 py-2 rounded`}>Да</div>
          <div onClick={() => setHasInvoceSB(false)} className={`${!hasInvoceSB ? "bg-main" : "bg-secondary"} cursor-pointer text-xs text-white px-4 py-2 rounded`}>Нет</div>
        </div>
        {/* </div> */}

        <input required placeholder="ИНН" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setInn(e.target.value)} value={inn} />
        <input required placeholder="Наименование компании" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setCompany(e.target.value)} value={company} />
        <input required placeholder="Фамилия" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <input required placeholder="Имя" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <input required placeholder="Отчество" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setMiddleName(e.target.value)} value={middleName} />

        <input required placeholder="Телефон" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
        <input placeholder="Email" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

        <input required placeholder="ОГРН" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setOgrn(e.target.value)} value={ogrn} />
        <input required placeholder="КПП" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setKpp(e.target.value)} value={kpp} />

        <div className="mt-2">
          <Combobox items={regionList} key={region.name} item={region} setItem={setRegion} placeholder="Регион" />
        </div>
        <button className="text-white bg-main py-3 px-4 rounded mt-4">Отправить</button>
      </form>
    </div>
  )
}