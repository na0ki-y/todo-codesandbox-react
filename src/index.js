import React from "react";
import ReactDom from "react-dom";
//ページごとにコンポーネント
import App from "./App.jsx";

// Appをrootにレンダリングする
ReactDom.render(<App />, document.getElementById("root"));
