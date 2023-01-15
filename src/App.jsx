import React, { useState, useEffect } from "react";
import { Colofulmessage } from "./components/Colofulmessage";
const App = () => {
  console.log("saisyo");
  const [num, setNum] = useState(0); //分割 変数名と関数
  const [faceflag, setfaceflag] = useState(true); //分割 変数名と関数

  const handleClick = () => {
    setNum(num + 1);
  };
  const onoffclickbutton = () => {
    setfaceflag(!faceflag);
  };
  useEffect(() => {
    console.log("配列を指定しないとベタ書きと同じ");
  }); //(関数,配列)
  useEffect(() => {
    console.log("はじめだけ実行するにはからの配列");
  }, []); //(関数,配列)
  useEffect(() => {
    console.log("配列にnumを入れる：numにだけ関心を向ける");
  }, [num]); //(関数,配列)
  useEffect(() => {
    if (num % 3 == 0) {
      console.log("a");
      faceflag || setfaceflag(true); //falseのときだけにsetfaceflag
    } else {
      faceflag && setfaceflag(false); //trueのときだけにsetfaceflag
    }
  }, [num]); //(関数,配列)

  const contentState = { color: "blue", fontSize: "18px" }; //中にCSSの記法
  const contentpinkState = { color: "pink", fontSize: "18px" }; //中にCSSの記法

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
      <button onClick={onoffclickbutton}>on/off</button>
      {faceflag && <p>(TT)</p>}
    </>
  );
};

//ほかのファイルでも使えるように
//ページごとにコンポーネント
export default App;

//ファイル名は.js or .jsx
