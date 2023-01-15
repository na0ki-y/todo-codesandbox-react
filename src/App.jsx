import React, { useState, useEffect } from "react";
import "./styles.css";
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["掃除", "料理"]);
  const [completeTodos, setCompleteTodos] = useState(["ごみ", "選択"]);
  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAddText = () => {
    if (todoText == "") {
      //なにも入力されていないときにはなにもしない
      return;
    }
    const newList = [...incompleteTodos, todoText]; //追加した配列を作成
    setIncompleteTodos(newList); //上書き
    setTodoText(""); //入力された文字を消す
  };
  const onClickDel = (index) => {
    const newList = [...incompleteTodos]; //deepコピー
    newList.splice(index, 1); //indexのいちを一つ削除する
    setIncompleteTodos(newList); //上書き
  };
  const onClickComp = (index) => {
    //追加
    const newListComp = [...completeTodos, incompleteTodos[index]]; //deepコピー
    setCompleteTodos(newListComp); //上書き
    //削除
    const newListIncomp = [...incompleteTodos]; //deepコピー
    newListIncomp.splice(index, 1); //indexのいちを一つ削除する
    setIncompleteTodos(newListIncomp); //上書き
  };
  const onClickBack = (index) => {
    //alert(`back ${index}`);
    //追加
    const newListIncomp = [...incompleteTodos, completeTodos[index]]; //deepコピー
    setIncompleteTodos(newListIncomp); //上書き
    //削除
    const newListComp = [...completeTodos]; //deepコピー
    newListComp.splice(index, 1); //indexのいちを一つ削除する
    setCompleteTodos(newListComp); //上書き
  };
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDo" value={todoText} onChange={onChangeText} />
        <button onClick={onClickAddText}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComp(index)}>完了</button>
                <button onClick={() => onClickDel(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          {completeTodos.map((done, index) => {
            return (
              <div key={done} className="list-row">
                <li>{done}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
