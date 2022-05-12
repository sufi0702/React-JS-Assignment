import React from "react";
const ToDo = ({ todo, handleComplete, handleDelete }) => {
  // const complete = (id) => {
  //   handleComplete(id)
  // };
  // const deleted = (id) => {
  //   handleDelete(id)
  // }
  let hideDeleted = !todo.isDeleted ? "" : "hide"
  let hideCompleted = !todo.complete ? "" : "hide"
  return (
    <>
      <div id={todo.id} key={todo.id} className={hideCompleted + " " + hideDeleted + " task"}>
        <span>{todo.task}</span>
        <button onClick={() => handleComplete(todo.id)} className="action-btn btn-complete">Completed</button>
        <button onClick={() => handleDelete(todo.id)} className="action-btn btn-delete">Delete</button>
      </div>
    </>
  );
};

export default ToDo;
