import React from "react";
import Header from "../Header";
import CtxProvider from "../ctx";
import Product from "../Product";

export default function Window({ src="" }) {

  return (<div>
    <CtxProvider>
      <Header />
      <Product src={src} />
    </CtxProvider>
  </div>)
}