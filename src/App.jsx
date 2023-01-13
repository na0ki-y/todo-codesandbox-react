import React, { useState } from "react";
import Colofulmessage from "./components/Colofulmessage";

const App = () => {
  const handleClick = () => {
    setNum(num + 1);
  };
  const clickbutton = () => {
    console.log("a");
    setNum(1999); //State更新関数
  };
  const contentState = { color: "blue", fontSize: "18px" }; //中にCSSの記法
  const contentpinkState = { color: "pink", fontSize: "18px" }; //中にCSSの記法
  const [num, setNum] = useState(0); //分割 変数名と関数
  //JSXはJSのなかにhtmlかける。
  //複数なら外側で囲わないといけないから、<React.Fragment> </React.Fragment>or<></>
  //<!-- {}JSをかく {color:'red'}JSオブジェクトの書き方 -->
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは．</h1>
      <Colofulmessage color="blue">元気ですか？</Colofulmessage>
      <Colofulmessage color="pink">げんき</Colofulmessage>
      <button onClick={handleClick}>カウントアップぼたん!</button>
      <p>{num}</p>
    </>
  );
};

//ほかのファイルでも使えるように
//ページごとにコンポーネント
export default App;

//ファイル名は.js or .jsx
