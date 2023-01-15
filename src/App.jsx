import React, { useState, useEffect } from "react";
import { InputTodo } from "./components/InputTodo";
import { InCompTodo } from "./components/InCompTodo";
import { CompTodo } from "./components/CompTodo";

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
      <InputTodo
        todoText={todoText}
        onChangeText={onChangeText}
        onClickAddText={onClickAddText}
        flagdisableInput={incompleteTodos.length >= 5 && true}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるのは5だ.</p>
      )}

      <InCompTodo
        incompleteTodos={incompleteTodos}
        onClickComp={onClickComp}
        onClickDel={onClickDel}
      />
      <CompTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
