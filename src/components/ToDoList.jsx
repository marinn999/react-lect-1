import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import ToDosData from "./todos.json";

const ToDoList = () => {
  const [todos, setTodos] = useState(() => {
    // Пробігаємось по local storage , витягуємо по ключу todos, парсимо і перевіряємо if, чи є
    // довжина масиву(те що є в local storage).Якщо є, то повертаємо те, що є в local storage, якщо ні,
    // то повертаємо todos із ToDosData (або можна повернути просто пустий масив, тоді видалити ToDosData і залишити лише пусті скобки[])
    const savedTodos = JSON.parse(window.localStorage.getItem("todos"));
    if (savedTodos.length) {
      return savedTodos;
    }
    return ToDosData;
  });

  const [newTodoValue, setNewTodoValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
