import React, { useState, useEffect } from "react";
import styles from "./Content.module.css";
import TodoItem from "./TodoItem/TodoItem";

function Content(props) {
  const [value, setValue] = useState(false);
  const [activeElement, setActiveElement] = useState(-1);

  function handleClick(e){
    const id = parseInt(e.target.attributes.getNamedItem('index').value);
    console.log(id);
    setActiveElement(id);
  }

  function change() {
    setValue(!value);
    props.setStatuses(!value);
  }

  function toggle() {
    if (value !== false) setValue(!value);
  }

  useEffect(()=>{
    if(props.count===0)
    setValue(true);
  }, [props.count])

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
        {props.todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              index={index}
              todo={todo}
              editTask={props.editTask}
              deleteTask={props.deleteTask}
              changeStatus={props.changeStatus}
              toggle={toggle}
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
