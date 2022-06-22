import React from "react";
import styles from "./Content.module.css";
import TodoItem from "./TodoItem/TodoItem";

function Content(props) {
  return (
    <section className={styles.main}>
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
                style={styles}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default Content;