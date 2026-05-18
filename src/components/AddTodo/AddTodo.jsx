import "./AddTodo.css";

function AddTodo({text, handleChangeText, addTodo}) {
  return (
    <div>
      <input value={text} onChange={handleChangeText} />
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default AddTodo;
