import React from "react";

export const InCompTodo = (props) => {
  //alert(porps);
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {props.incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => props.onClickComp(index)}>完了</button>
              <button onClick={() => props.onClickDel(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
