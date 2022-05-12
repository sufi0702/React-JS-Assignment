import React, { useState } from "react";
import "../assets/css/toDoForm.css";
const ToDoform = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput) {
      addTask(userInput);
    } else {
      document.querySelector("input").focus();
      alert("Please Enter the task...");
    }
    setUserInput("");
  };
  return (
    <div className="todo-form">
      <h3>Add task on todo list</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <br></br>
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default ToDoform;
