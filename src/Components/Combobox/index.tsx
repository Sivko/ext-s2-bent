import React, { KeyboardEvent, useEffect, useRef, useState } from "react";

export interface Item {
  name: string
  id?: string,
  "attribute-name"?: string,
  type?: string
  recorded?: string
  value?: string
}

function Combobox({ items = [], item, setItem }: { items: Item[] | null, item: Item | null, setItem: any }) {

  const [inputValue, setInputValue] = useState(item ? item.name : "")
  const [isShowList, setIsShowList] = useState(false);
  const [filterElements, setFilterElements] = useState(items);
  // https://app.salesap.ru/api/v1/deals/ids?filter[table-state-id]=2589138
  const comboboxRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!items) return
    if (inputValue) setFilterElements(items.filter((e) => e.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())))
    else setFilterElements(items)
  }, [inputValue])

  const keyPressToSelect = (e: KeyboardEvent<HTMLInputElement>) => {

  }

  function hideList(e: MouseEvent) {
    const componentElement = comboboxRef.current
    if (!componentElement) return;
    if (e.target == componentElement || componentElement.contains(e.target as HTMLElement)) { }
    else { setIsShowList(false) }
  }

  useEffect(() => {
    document.addEventListener("mousedown", hideList)
    return () => document.removeEventListener('mousedown', hideList)
  }, [])

  // filterElements

  return (<>
    <div className="relative" ref={comboboxRef}>
      <input type="text"
        // onKeyDown={(e) => { setIsShowList(true); keyPressToSelect(e) }}
        className="py-2 px-1 border border-outline border-solid rounded outline-none w-full"
        value={inputValue}
        onClick={() => setIsShowList(prev => { setFilterElements(items); return !prev })}
        onChange={(e) => { setInputValue(e.target.value); }}
      />
      <div className={`absolute mt-2 top-full animate-fade border border-solid border-outline bg-white w-full rounded max-h-[250px] overflow-y-scroll p-2 z-10 ${isShowList ? "" : "hidden"}`}>
        {filterElements && filterElements.length > 0 && filterElements
          .map((e, index) => (<div
            key={index}
            onClick={() => { setItem(e); setInputValue(e.name); setIsShowList(false); }}
            className={`py-2 px-1 rounded border-b overflow-hidden border-solid border-white border-b-outline cursor-pointer ${item && item["attribute-name"] == e["attribute-name"] ? "bg-[#d1d1d1]" : ""}`}
          >
            {e.name}
          </div>
          ))}
        {filterElements && filterElements.length == 0 && <div
          className="py-2 px-1 text-center">Ничего не найдено</div>}
      </div>
      <div className="absolute top-[-6px] left-2 text-[10px] bg-white">{item?.name ? item["attribute-name"] : "не выбрано"}</div>
    </div>
  </>)
  // const [activeIndex, setActiveIndex] = useState(0)
  // const [isShow, setIsShow] = useState(false)
  // const [valueToFind, setValueToFind] = useState("")
  // const [isShowAllFields, setIsShowAllFields] = useState(true)
  // const [focusSelectIndex, setFocusSelectIndex] = useState(0)
  // const [filterElements, setFilterElements] = useState(items)

  // useEffect(() => {
  //   setFocusSelectIndex(0)
  //   if (valueToFind) setFilterElements(items.filter((e) => isShowAllFields ? true : e.name.toLocaleLowerCase().includes(valueToFind.toLocaleLowerCase())))
  //   else setFilterElements(items)
  //   setItem(filterElements[focusSelectIndex])
  // }, [valueToFind])

  // const keyPressToSelect = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (!isShow) return
  //   if (e.key == "ArrowDown") { setFocusSelectIndex(prev => filterElements.length == prev + 1 ? 0 : prev + 1); return }
  //   if (e.key == "ArrowUp") { setFocusSelectIndex(prev => prev == 0 ? filterElements.length - 1 : prev - 1); return }
  //   if (e.key == "Escape") { setIsShow(false); return }
  //   if (e.key == "Enter") { setIsShowAllFields(true); setValueToFind(filterElements[focusSelectIndex].name); setIsShow(false); return }
  // }

  // return (<div className="relative" onClick={() => setIsShow(prev => !prev)}>
  //   <input type="text" onKeyDown={(e) => { setIsShow(true); keyPressToSelect(e) }} className="py-2 px-1 border border-outline border-solid rounded outline-none w-full" value={item.name} onChange={(e) => { setValueToFind(e.target.value); setIsShowAllFields(false) }} />
  //   {isShow && (<div className="absolute mt-2 top-full animate-fade border border-solid border-outline bg-white w-full rounded max-h-[250px] overflow-y-scroll p-2">
  //     {filterElements
  //       .map((e, index) => (<div
  //         key={index}
  //         className={`py-2 px-1 rounded border-b overflow-hidden border-solid border-white border-b-outline cursor-pointer ${focusSelectIndex == index ? "bg-[#fbfbfb]" : ""}`}
  //         onClick={() => (setActiveIndex((prev) => { setIsShowAllFields(true); setValueToFind(e.name); return index }))}
  //       >
  //         {e.name}
  //       </div>
  //       ))}
  //     {!isShowAllFields && filterElements.length == 0 && <div
  //       className="py-2 px-1 text-center">Ничего не найдено</div>}
  //   </div>)}
  // </div>)
}

export default Combobox