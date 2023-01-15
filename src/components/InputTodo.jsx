import React from "react";
export const InputTodo = (props) => {
  return (
    <div className="input-area">
      <input
        placeholder="ToDo"
        value={props.todoText}
        onChange={props.onChangeText}
      />
      <button onClick={props.onClickAddText}>追加</button>
    </div>
  );
};
