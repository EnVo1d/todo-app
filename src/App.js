import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState(todos);

  useEffect(() =>{
    setFiltered(todos)
  }, [todos])

  function createTask(task) {
    const newTodos = [...todos, task];
    setTodos(newTodos);
    console.log(newTodos);
  }

  function editTask(index, value) {
    const newTodos = [...todos];
    newTodos[index].title = value;
    setTodos(newTodos);
  }

  function deleteTask(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function changeStatus(index, value) {
    const newTodos = [...todos];
    newTodos[index].status = value;
    setTodos(newTodos);
  }

  function filterTodos(value) {
    if(value==='all')
    {
      setFiltered(todos);
    }
    else{
      let newTodo = [...todos].filter(item => item.status === value);
      setFiltered(newTodo);
    }
  }

  return (
    <div>
      <Header todos={todos} createTask={createTask} />
      <Content todos={filtered} deleteTask={deleteTask} editTask={editTask} changeStatus={changeStatus}/>
      <Footer todos={todos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
