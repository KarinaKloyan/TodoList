import "./AddTodo.css";

function AddTodo({ text, handleChangeText, addTodo }) {
  return (
    <div className="addtodo">
      <input value={text} onChange={handleChangeText} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
