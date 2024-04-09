import "./Todo.css";

const Todo = ({ task, id, deleteTask }) => {
  const handleClick = (e) => {
    deleteTask(e.target.parentElement.id);
  };

  return (
    <div className="Todo" id={id}>
      <button onClick={handleClick}>X</button>
      {task}
    </div>
  );
};

export default Todo;
