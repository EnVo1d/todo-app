import React, { useState } from "react";
import styles from "./Footer.module.css";
import {
  filterTaskActionCreator,
  clearCompletedActionCreator,
} from "../../store/reducer/todos-reducer";
import { useSelector, useDispatch } from "react-redux";

function Footer() {
  const [isAll, setAll] = useState(true);
  const [isActive, setActive] = useState(false);
  const [isCompleted, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  const todosCount = useSelector((state)=>state.todos.length);

  function filter(e) {
    if (e.target.name === "all") {
      setAll(true);
      setActive(false);
      setCompleted(false);
      dispatch(filterTaskActionCreator("all"));
    } else if (e.target.name === "active") {
      setActive(true);
      setCompleted(false);
      setAll(false);
      dispatch(filterTaskActionCreator(false));
    } else if (e.target.name === "completed") {
      setCompleted(true);
      setActive(false);
      setAll(false);
      dispatch(filterTaskActionCreator(true));
    }
  }

  return (
    <footer className={styles.container}>
      <span className={styles.todoCount}>
        <strong>{count}</strong>
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
      {count !== todosCount && (
        <button
          className={styles.clearCompleted}
          onClick={() => dispatch(clearCompletedActionCreator())}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
