import React, { useState } from "react";
import styles from "./Footer.module.css";

function Footer(props) {
  const [isAll, setAll] = useState(true);
  const [isActive, setActive] = useState(false);
  const [isCompleted, setCompleted] = useState(false);

  function filter(e) {
    if (e.target.name === "all") {
      setAll(true);
      setActive(false);
      setCompleted(false);
      props.filterTodos('all');
    } else if (e.target.name === "active") {
      setActive(true);
      setCompleted(false);
      setAll(false);
      props.filterTodos(false);
    } else if (e.target.name === "completed") {
      setCompleted(true);
      setActive(false);
      setAll(false);
      props.filterTodos(true);
    }
  }

  return (
    <footer className={styles.container}>
      <span className={styles.todoCount}>
        <strong>{props.todos.length}</strong>
        <span> items </span>
        <span>left</span>
      </span>
      <ul className={styles.filters}>
        <li>
          <a
            href="#/"
            name="all"
            className={isAll ? styles.selected : null}
            onClick={(e) => filter(e)}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            name="active"
            className={isActive ? styles.selected : null}
            onClick={(e) => filter(e)}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            name="completed"
            className={isCompleted ? styles.selected : null}
            onClick={(e) => filter(e)}
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
