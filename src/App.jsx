import React from "react";

const App = () => {
  const clickbutton = () => console.log("n");
  const contentState = { color: "blue", fontSize: "18px" }; //中にCSSの記法

  //JSXはJSのなかにhtmlかける。
  //複数なら外側で囲わないといけないから、<React.Fragment> </React.Fragment>or<></>
  //<!-- {}JSをかく {color:'red'}JSオブジェクトの書き方 -->
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは．</h1>
      <p style={contentState}>おげんきですか</p>
      <button onClick={clickbutton}>ぼたん.</button>
    </>
  );
};

//ほかのファイルでも使えるように
//ページごとにコンポーネント
export default App;

//ファイル名は.js or .jsx
