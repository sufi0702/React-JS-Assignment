import React from "react";
import ToDo from "./ToDo";
import '../assets/css/toDoList.css'
const ToDoList = ({ toDoList, handleComplete, handleDelete }) => {
  return (
    <>
      <div className="col3 todo-list">
        <h2>Todo List</h2>
        {toDoList.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default ToDoList;
