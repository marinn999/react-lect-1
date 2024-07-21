import { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDosData from "./todos.json";

const ToDoList = () => {
  const [todos, setTodos] = useState(ToDosData);
  const [newTodoValue, setNewTodoValue] = useState("");

  const handleDelete = (id) => {
    // const filteredArray = todos.filter((item) => item.id !== id);
    // console.log(filteredArray);
    // setTodos(filteredArray);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const handleAdd = () => {
    const newTodo = {
      id: new Date().getTime(),
      todo: newTodoValue,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <div>
        <input onChange={(e) => setNewTodoValue(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((item) => (
          <ToDoItem handleDelete={handleDelete} key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
