import React, { FC, ReactElement, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { AiFillAlert } from "react-icons/ai"
import Token from "@/Components/Popup/Token";

interface IProps {

}

export const Popup: FC<IProps> = () => {

  const delays = ["animate-delay-[100ms]", "animate-delay-[200ms]", "animate-delay-[300ms]", "animate-delay-[400ms]"]

  return (
    <>
      <div className="bg-main text-[#ffffffad] p-2 flex justify-between items-center">
        <div className="animate-fade-down">Dasreda</div>
        <a target="_blank" href="#" className="text-white no-underline rounded-full opacity-50 hover:opacity-100 transition-opacity">Инструкция</a>
      </div>
      <div className="py-2 px-2 h-full">
        <Token />
      </div >
    </>
  );
}

render(<Popup />, document.getElementById("popup"));
