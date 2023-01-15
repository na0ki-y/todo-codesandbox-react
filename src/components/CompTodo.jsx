import React from "react";

export const CompTodo = (props) => {
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul>
        {props.completeTodos.map((done, index) => {
          return (
            <div key={done} className="list-row">
              <li>{done}</li>
              <button onClick={() => props.onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
