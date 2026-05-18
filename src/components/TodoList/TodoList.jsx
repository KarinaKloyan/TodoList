import "./TodoList.css";

function TodoList({ todos, updateTodo, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => updateTodo(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
            }}
          >
            {todo.title}
          </span>
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
