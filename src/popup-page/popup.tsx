import React, { FC, ReactElement, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { AiFillAlert } from "react-icons/ai"
import Token from "@/Components/Popup/Token";
import Parsing from "@/Components/Popup/Parsing";
import Batch from "@/Components/Popup/Batch";
import ContextProvider from "@/context-provider";

interface IProps {

}

const tabs = [{ name: "Токен", component: Token }, { name: "Парсинг", component: Parsing }, { name: "Массовое изменение", component: Batch }]

function Component({ component }: { component: any }) {
  const ComponentItem = component
  return <ComponentItem />
}

export const Popup: FC<IProps> = () => {

  const [activeItem, setActiveItem] = useState(2);

  useEffect(() => {
  }, []);

  const delays = ["animate-delay-[100ms]", "animate-delay-[200ms]", "animate-delay-[300ms]", "animate-delay-[400ms]"]

  return (
    <>
      <ContextProvider>
        <div className="bg-main text-[#ffffffad] p-2 flex justify-between items-center">
          <div className="animate-fade-down"><span>VineScript <sup>113</sup></span></div>
          <a href="#" className="text-[#ffffffad] p-2 border border-[#ffffffad] rounded-full"><AiFillAlert /></a>
        </div>
        <div className="py-2 px-2">
          <div className="flex items-center gap-1 mb-4">
            {tabs.map((item, index) => {
              return (<div className="relative">
                <span
                  className={`animate-fade-down duration-100 cursor-pointer text-[#0000008d] ${delays[index]} ${index == activeItem ? "border-b-main !text-[#000]" : ""} `}
                  key={index}
                  onClick={() => setActiveItem(index)}>{item.name}</span>
              </div>
              )
            })}
          </div>
          <Component component={tabs[activeItem].component} />
        </div >
      </ContextProvider>
    </>
  );
}

render(<Popup />, document.getElementById("popup"));
