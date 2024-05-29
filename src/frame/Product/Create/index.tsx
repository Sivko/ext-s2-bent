import Combobox from "@/Components/Combobox";
import mask from "@/helpers/mask";
import { regionList } from "@/helpers/regions";
import { reducers } from "@/lib/reducers";
import React, { useEffect, useState } from "react";

export default function Create() {

  const [inn, setInn] = useState("");
  const [company, setCompany] = useState("");
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")

  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [region, setRegion] = useState({ name: "" })

  useEffect(() => {
    (async () => {
      const lastCompany = await reducers.getLastCompany()
      setInn(lastCompany.data?.attributes.inn ?? "")
      setCompany(lastCompany.data?.attributes["full-name"])
      setLastName(lastCompany.data?.attributes["manager-name"].split(" ")[0])
      setFirstName(lastCompany.data?.attributes["manager-name"].split(" ")[1])
      setMiddleName(lastCompany.data?.attributes["manager-name"].split(" ")[2])

      setPhone(lastCompany.data?.attributes["general-phone"] ? mask(lastCompany.data?.attributes["general-phone"]) : "")
      setEmail(lastCompany.data?.attributes.email)
      // setRegion
    })()
  }, [])

  function sendForm(e: React.FormEvent) {

  }

  return (
    <div>
      <h1 className="font-bold text-[25px] my-4">Новая заявка</h1>
      <form onSubmit={sendForm} className="flex flex-col gap-2">
        <input placeholder="ИНН" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setInn(e.target.value)} value={inn} />
        <input placeholder="Наименование компании" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setCompany(e.target.value)} value={company} />
        <input placeholder="Фамилия" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
        <input placeholder="Имя" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <input placeholder="Отчество" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setMiddleName(e.target.value)} value={middleName} />

        <input placeholder="Телефон" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
        <input placeholder="Email" className=" w-full max-w-[400px] border-b-outline border-white border" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

        <div className="mt-2">
          <Combobox items={regionList} item={region} setItem={setRegion} placeholder="Регион" />
        </div>
        <button className="text-white bg-main py-3 px-4 rounded mt-4">Отправить</button>
      </form>
    </div>
  )
}