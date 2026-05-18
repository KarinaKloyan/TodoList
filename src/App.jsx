import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (text.trim()) {
      setTodos((prev) => {
        return [
          ...prev,
          {
            id: Date.now(),
            title: text,
            isDone: false,
          },
        ];
      });
      setText("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      }),
    );
  };
  return (
    <>
      <h1>Todo App </h1>

      <AddTodo
        text={text}
        handleChangeText={handleChangeText}
        addTodo={addTodo}
      />

      <TodoList 
      todos={todos} 
      updateTodo={updateTodo} 
      removeTodo={removeTodo} />
    </>
  );
}

export default App;
