import React from "react";
import "../assets/css/completeList.css";

const CompletedList = ({ toDoList, handleUncomplete, handleDelete }) => {
  return (
    <div className="col3 completed-list">
      <h2>Completed List</h2>
      {toDoList.map((completeList) => {
        let hideDeleted = !completeList.isDeleted ? "" : "hide";
        let hideCompleted = completeList.complete ? "" : "hide";
        return (
          <div
            key={completeList.id}
            className={hideDeleted + " " + hideCompleted + " task"}
          >
            <span>{completeList.task}&nbsp;</span>
            <button
              type="button"
              onClick={() => handleUncomplete(completeList.id)}
              className="action-btn btn-uncomplete"
            >
              Uncompleted
            </button>
            <button
              type="button"
              onClick={() => handleDelete(completeList.id)}
              className="action-btn btn-delete"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedList;
