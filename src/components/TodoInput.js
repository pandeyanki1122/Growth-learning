import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        value={inputText}
        placeholder="Enter your todo.."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="add-btn" onClick={() => {props.addList(inputText)
        setInputText('')}} >+</button>
    </div>
  );
}

export default TodoInput;
