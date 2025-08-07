import { useState, useRef, createElement } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]); // 저장된 할 일
  const [newTodo, setNewTodo] = useState(""); // 저장할 할 일
  const todoRef = useRef(); // focus용 Ref

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
      todoRef.current.focus();
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  const handleSubmit = () => {
    createElement('input')
  }

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <input
        ref={todoRef}
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;