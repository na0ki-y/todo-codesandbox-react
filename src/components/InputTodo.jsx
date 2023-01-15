import React from "react";

// .input-area {
//   background-color: #c1ffff;
//   width: 400px;
//   height: 30px;
//   border-radius: 8px;
//   padding: 8px;
//   margin: 8px;
// }
//ハイフンはキャメルケースで大文字
//値は文字列
//セミコロンは, オブジェクトなので

const style_input = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px",
};
export const InputTodo = (props) => {
  return (
    <div style={style_input}>
      <input
        disabled={props.flagdisableInput}
        placeholder="ToDo"
        value={props.todoText}
        onChange={props.onChangeText}
      />
      <button disabled={props.flagdisableInput} onClick={props.onClickAddText}>
        追加
      </button>
    </div>
  );
};
