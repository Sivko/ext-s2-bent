import React from "react";
import CtxProvider from "../ctx";
import Product from "../Product";

export default function Window({ src="" }) {

  return (<div className="w-full h-full">
    <CtxProvider>
      <Product src={src} />
    </CtxProvider>
  </div>)
}