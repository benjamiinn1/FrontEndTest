import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import About from "./components/pages/About";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        setTodos(res.data);
      });
  }, []);

  const addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(res => {
        const NewTodos = [...todos, res.data];
        setTodos(NewTodos);
      });
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // const deleteTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };

  const deleteTodo = index => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${index}`)
      .then(res => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      });
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} />
                {todos.map((todo, index) => (
                  <Todos
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                  />
                ))}
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
