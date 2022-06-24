import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState(todos);
  const [filterType, setFilterType] = useState('all');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (filterType === 'all') {
      setFiltered(todos);
    }
    else {
      const newTodo = [...todos].filter(item => item.status === filterType);
      setFiltered(newTodo);
    }
  }, [filterType, todos])

  function createTask(task) {
    const newTodos = [...todos, task];
    setTodos(newTodos);
  }

  function editTask(index, value) {
    console.log(value);
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
    if (value === true)
      setCounter(counter + 1);
    else setCounter(counter - 1);
  }

  function setStatuses(value) {
    const newTodos = [...todos]
    let j = 0;
    for (let i = 0; i < newTodos.length; i++) {
      newTodos[i].status = value;
      j++;
    }
    setTodos(newTodos);
    if (value === true)
      setCounter(counter + j);
    else setCounter(0)
  }

  function filterTodos(value) {
    setFilterType(value);
  }

  function clearCompleted() {
    const newTodos = [...todos].filter(item => item.status === false)
    setTodos(newTodos);
    setCounter(0);
  }

  return (
    <div>
      <Header count={
        todos.length > 0 ? todos[todos.length - 1].id : 0
      } createTask={createTask} />
      {
        todos.length > 0 &&
        <div>
          <Content todos={filtered} deleteTask={deleteTask} editTask={editTask} changeStatus={changeStatus} setStatuses={setStatuses} count={todos.length - counter}/>
          <Footer count={todos.length - counter} filterTodos={filterTodos} checkedCount={counter} clearCompleted={clearCompleted} />
        </div>
      }
    </div>
  );
}

export default App;
