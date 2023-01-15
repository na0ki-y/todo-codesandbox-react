import React, { useState, useEffect } from "react";
import "./styles.css";
export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="ToDo"></input>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了</p>
        <ul>
          <div className="list-row">
            <li>掃除</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>料理</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了</p>
        <ul>
          <div className="list-row">
            <li>選択</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>ごみ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
