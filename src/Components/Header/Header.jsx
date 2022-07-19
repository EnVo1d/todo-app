import React, { useState } from "react";
import styles from "./Header.module.css";
import { addTaskActionCreator } from "../../store/reducer/todos-reducer";
import { useDispatch } from "react-redux";

function Header() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (!value) return;
      dispatch(addTaskActionCreator(value));
      setValue("");
    }
  }

  return (
    <header>
      <h1>todos</h1>
      <input
        className={styles.new_todo}
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
}

export default Header;
