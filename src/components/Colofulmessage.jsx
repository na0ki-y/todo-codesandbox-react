import React, { useState } from "react";
export const Colofulmessage = (props) => {
  const { color, children } = props;

  const contentpinkState = { color: color, fontSize: "18px" }; //中にCSSの記法
  return <p style={contentpinkState}>{children}</p>;
};
//通常のとき typo防げる
//export const Colofulmessage = (props) => {};
////import は分割代入
//import {Colofulmessage} from "./components/Colofulmessage";
//
//defaultのとき
//const Colofulmessage = (props) => {};
//export default Colofulmessage;
////import は任意の名前
//import Colofulmessage from "./components/Colofulmessage";
