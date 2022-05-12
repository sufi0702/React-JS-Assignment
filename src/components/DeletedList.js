import React from "react";
import '../assets/css/deletedList.css'
const DeletedList = ({ toDoList, handleRestore }) => {
  return (
    <div className="col3 deleted-list">
      <h2>Deleted List</h2>
      {toDoList.map((deletedList) => {
        let hideUnDeleted = deletedList.isDeleted ? "" : "hide"
        return (
          <div
            key={deletedList.id}
            className={hideUnDeleted + " task delete-task"}
          >
            <span>{deletedList.task}</span>
            <button type="button" className="action-btn btn-restore" onClick={() => handleRestore(deletedList.id)}>
              Restore
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DeletedList;
