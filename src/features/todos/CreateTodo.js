import React, { useState } from "react";

function CreateTodo() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <form>
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
