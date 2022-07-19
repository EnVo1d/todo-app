import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import React from 'react';
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <Header />
      {
        todos.length > 0 &&
        <>
          <Content />
          <Footer />
        </>
      }
    </>
  );
}

export default App;
