import { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
    if (error) {
      setError("");
    }
  };

  const addTodo = () => {
    if (!text.trim()) {
      setError("Input is empty");
      return;
    }

    const exists = todos.some(
      (todo) => todo.title.toLowerCase() === text.trim().toLowerCase(),
    );
    if (exists) {
      setError("Todo already exists");
      return;
    }
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: text,
        isDone: false,
      },
    ]);
    setText("");
    setError("");
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

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.title);
  };

  const saveEdit = () => {
    if (!editText.trim()) {
      setError("Edit can't be empty");
      return;
    }
    const exists = todos.some(
      (todo) => todo.title.toLowerCase() === editText.trim().toLowerCase(),
    );
    if (exists) {
      setError("Todo already exists");
      return;
    }
    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, title: editText } : todo,
      ),
    );

    setEditId(null);
    setEditText("");
    setError("");
  };

  return (
    <div className="container section">
      <h1>TODO LIST</h1>
      <div className="top-section">
        <AddTodo
          text={text}
          handleChangeText={handleChangeText}
          addTodo={addTodo}
        />
        {error && <p className="error">{error}</p>}
      </div>
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        startEdit={startEdit}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
        saveEdit={saveEdit}
      />
    </div>
  );
}

export default App;
