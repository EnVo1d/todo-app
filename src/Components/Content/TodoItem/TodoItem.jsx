import React, { useState } from "react";

function TodoItem(props) {
  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState(props.todo.title);
  const [isDone, setDone] = useState(props.todo.status);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const setComplete = () => {
    setDone(!isDone);
    props.changeStatus(props.index, !isDone);
  };

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (!value) return;
      props.editTask(props.index, value);
      setValue(value);
      toggleClass();
    }
  }

  return (
    <li className={isDone ? props.style.completed : ""}>
      <div
        className={`${props.style.view} ${isActive ? "hidden" : ""}`}
        onDoubleClick={toggleClass}
      >
        <input className={props.style.toggle} type="checkbox" checked={isDone} onChange={()=>setComplete()}/>
        <label>{props.todo.title}</label>
        <button
          className={props.style.destroy}
          onClick={() => props.deleteTask(props.index)}
        ></button>
      </div>
      <input
        className={props.style.edit}
        id={isActive ? props.style.show : null}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
}

export default TodoItem;
