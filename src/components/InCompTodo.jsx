import React from "react";
const style_incomparea = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};
export const InCompTodo = (props) => {
  //alert(porps);
  return (
    <div style={style_incomparea}>
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
