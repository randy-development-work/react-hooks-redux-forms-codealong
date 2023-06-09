import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdded } from "./todosSlice";
import { v4 as uuid } from "uuid";

function CreateTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // const newText = {
    //   id: uuid(),
    //   text
    // }
    // dispatch(todoAdded(newText));
    dispatch(todoAdded(text));
    setText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleChange} value={text} />
        </p>
        <input type="submit" />
      </form>
      <p>Form Text: {text}</p>
    </div>
  );
}

export default CreateTodo;
