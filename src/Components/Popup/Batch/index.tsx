import React, { useContext, useEffect, useState } from "react";
import Combobox, { Item } from "@/Components/Combobox";
import { FiltersRoot } from "@/types/filters";
import { Context } from "@/context-provider";
import ky from "ky";
import { IDSRoot } from "@/types/ids";
import { systemFieldsDeals } from "@/systemFields/systemFieldsDeals";
import { IoMdClose } from "react-icons/io";

function Bactch() {

  const { address, options } = useContext(Context);

  const objectsType: Item[] = [{ name: "Сделки", "attribute-name": "Deal", type: "deals" }, { name: "Заявки", "attribute-name": "Order", type: "orders" }, { name: "Компании", "attribute-name": "Company", type: "companies" }, { name: "Контакты", "attribute-name": "Contact", type: "contacts" }]
  const [objectType, setObjectType] = useState<Item>(objectsType[0])

  const [filters, setFilters] = useState<Item[] | null>(null)
  const [filter, setFilter] = useState<Item | null>(null)
  const [idsData, setIdsData] = useState<IDSRoot | null>(null)

  const [fields, setFields] = useState<Item[] | null>([])
  const [fieldsValue, setFieldsValue] = useState<Item[]>([])


  async function getFiltersAndFields() {
    const filtersData: FiltersRoot = await ky.get(`${address}/api/v1/table-states?filter[class-name]=${objectType["attribute-name"]}`, options).json();
    const _filters = filtersData.data.filter(item => item.attributes.name).map((item) => ({ name: item.attributes.name, id: item.id, "attribute-name": item.id } as Item))
    // const customFields: FiltersRoot = await ky.get()
    setFilters(_filters)
  }

  async function getItemIds() {
    if (!filter) return;
    const itemData: IDSRoot = await ky.get(`${address}/api/v1/${objectType.type}?filter[table-state-id]=${filter.id}`, options).json()
    setIdsData(itemData)
  }

  useEffect(() => {
    setFilter(null)
    setFilters(null)
    setIdsData(null)
    if (objectType["attribute-name"])
      getFiltersAndFields()
  }, [objectType])

  useEffect(() => {
    setIdsData(null)
    getItemIds()
  }, [filter])

  return (<div>
    <div className="flex gap-4 items-center">
      <div>Объект:</div>
      <Combobox items={objectsType} item={objectType} setItem={setObjectType} />
    </div>
    <div className="flex gap-4 items-center mt-2">
      <div>Фильтр:</div>
      <Combobox items={filters} item={filter} setItem={setFilter} />
    </div>
    {filter?.id && <div className="flex gap-4 items-center mt-2">
      <div>Объектов в фильтре:</div>
      <b>{idsData?.meta["record-count"]}</b>
    </div>}

    <div className="flex items-center mt-2 flex-col gap-2">
      {fieldsValue.map((item, index) => (<div key={`combo_${index}`} className="flex gap-2 w-full">
        <Combobox item={item} items={systemFieldsDeals} setItem={(_item: Item) => setFieldsValue((prev) => { let items = prev; items[index] = _item; return [...items] })} />
        <input className="flex-1 border-solid border-white border-b-outline border-b" value={fieldsValue[index]?.value ?? ""} onChange={(e) =>
          setFieldsValue((prev) => { let _items = prev; _items[index].value = e.target.value; return _items })
        } />
        <button
          className="p-2 cursor-pointer opacity-70 rounded-sm hover:opacity-100 transition-all bg-[#ba3b3b] border-none flex items-center justify-center"
          onClick={() => setFieldsValue(prev => prev.filter((e, idx) => index != idx))}>
          <IoMdClose color="#fff" size={17} />
        </button>
      </div>))}
    </div>

    <div className="flex items-center mt-2">
      <button onClick={() => setFieldsValue(prev => [...prev, { name: "" }])} className="flex-1 rounded-sm bg-main text-white p-2 border-none opacity-70 hover:opacity-100 transition-all cursor-pointer">Добавить поле</button>
    </div>

  </div>)
}

export default Bactch