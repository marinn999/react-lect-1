const ToDoItem = ({ handleDelete, id, completed, todo }) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{todo}</span>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
