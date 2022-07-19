import React, { useState, useEffect } from "react";
import styles from "./Content.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { setStatusesActionCreator } from "../../store/reducer/todos-reducer";
import { useSelector, useDispatch } from "react-redux";

function Content(props) {
  const [value, setValue] = useState(false);
  const [activeElement, setActiveElement] = useState(-1);
  const todos = useSelector((state) => state.filtered);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function handleClick(e) {
    const id = parseInt(e.target.attributes.getNamedItem("index")?.value);
    setActiveElement(id);
  }

  function change() {
    dispatch(setStatusesActionCreator(!value));
    setValue(!value);
  }

  function toggle() {
    if (value !== false) setValue(!value);
  }

  useEffect(() => {
    if (count === 0) setValue(true);
  }, [count]);

  return (
    <section className={styles.main}>
      <input
        id="toggle-all"
        className={styles.toggleAll}
        checked={value}
        type="checkbox"
        onChange={() => change()}
      />
      <label htmlFor="toggle-all"></label>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              index={index}
              todo={todo}
              toggle={toggle.bind(this)}
              style={styles}
              handleClick={handleClick.bind(this)}
              activeElement={activeElement}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default Content;
