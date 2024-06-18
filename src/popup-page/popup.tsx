import React, { FC, ReactElement, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Token from "@/Components/Popup/Token";

interface IProps {

}

export const Popup: FC<IProps> = () => {

  return (
    <>
      <div className="bg-main text-[#ffffffad] p-2 flex justify-between items-center">
        <div className="animate-fade-down">Внешняя Заявка</div>
        <a target="_blank" href="#" className="text-white no-underline rounded-full opacity-50 hover:opacity-100 transition-opacity">Инструкция</a>
      </div>
      <div className="py-2 px-2 h-full">
        <Token />
      </div >
    </>
  );
}

render(<Popup />, document.getElementById("popup"));
