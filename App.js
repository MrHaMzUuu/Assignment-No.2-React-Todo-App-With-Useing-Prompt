import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";







const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = prompt("Enter a new todo:");
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };

  const editTodo = (index) => {
    const newTodo = prompt("Enter the new value:");
    if (newTodo) {
      setTodos(
        todos.map((todo, i) => {
          if (i === index) {
            return newTodo;
          }
          return todo;
        })
      );
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default App;



















// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">






//       </header>
//     </div>
//   );
// }

// export default App;
