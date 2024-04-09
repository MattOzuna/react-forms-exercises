import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [Todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos((Todos) => [...Todos, task]);
  };

  const deleteTask = (idx) => {
    setTodos(Todos.toSpliced(idx, 1));
  };

  return (
    <div className="TodoList">
      <h1>Todo List</h1>
      {Todos.map((task, idx) => (
        <Todo task={task} deleteTask={deleteTask} id={idx} key={idx} />
      ))}
      <NewTodoForm addTask={addTask} />
    </div>
  );
};

export default TodoList;
