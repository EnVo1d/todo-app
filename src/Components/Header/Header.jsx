import React, { useState } from "react";
import styles from "./Header.module.css";

function Header(props) {
  const [value, setValue] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (!value) return;
      props.createTask({id: props.count+1, title: value, status: false});
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
