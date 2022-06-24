import React, { useEffect, useState, useCallback } from "react";

function TodoItem(props) {
  const [isActive, setActive] = useState(false);
  const [value, setValue] = useState(props.todo.title);
  const [isDone, setDone] = useState(props.todo.status);
  const [id] = useState(props.index);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const setComplete = () => {
    setDone(!isDone);
    props.changeStatus(props.index, !isDone);
    if (!isDone === false) props.toggle();
  };

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      toggleOffEdit();
      toggleClass();
    }
  }

  const toggleOffEdit = useCallback(() => {
    if (!value) return;
    props.editTask(id, value);
    setValue(value);
  }, [value, id, props.editTask]);

  if (isDone !== props.todo.status) {
    setDone(!isDone);
  }

  useEffect(() => {
    if (props.activeElement !== props.index) {
      setActive(false);
      if (isActive) toggleOffEdit();
    }
  }, [props.activeElement, props.index, toggleOffEdit, isActive]);

  return (
    <li
      className={`${isDone ? props.style.completed : ""} ${
        isActive ? props.style.editing : ""
      }`}
    >
      <div
        className={props.style.view}
        onDoubleClick={toggleClass}
        onClick={props.handleClick}
      >
        <input
          className={props.style.toggle}
          type="checkbox"
          checked={isDone}
          onChange={() => setComplete()}
        />
        <label index={props.index}>{props.todo.title}</label>
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
