import React from "react";
//ページごとにコンポーネント
import { App } from "./App.jsx";

// Appをrootにレンダリングする
//ReactDom.render(<App />, document.getElementById("root"));

//https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
