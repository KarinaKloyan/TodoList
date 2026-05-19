import "./TodoList.css";

function TodoList({
  todos,
  updateTodo,
  removeTodo,
  startEdit,
  editId,
  editText,
  setEditText,
  saveEdit,
}) {
  return (
    <ul className="todolist">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={() => updateTodo(todo.id)}
          />
          {editId === todo.id ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={saveEdit}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveEdit();
              }}
              autoFocus
            />
          ) : (
            <>
              <span
                className={todo.isDone ? "done" : ""}
                onDoubleClick={() => startEdit(todo)}
              >
                {todo.title}
              </span>
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
