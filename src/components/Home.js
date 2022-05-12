import React, {useState} from "react";

import data from "../data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import CompletedList from "./CompletedList";
import DeletedList from "./DeletedList";
import ToDoform from "./ToDoform";
const Home = () => {
  const [toDoList, setToDoList] = useState(data);
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      {
        id: toDoList.length + 1,
        task: userInput,
        complete: false,
        isDeleted: false,
      },
    ];
    setToDoList(copy);
  };
  const handleComplete = (id) => {
    toDoList[id - 1].complete = true;
    setToDoList([...toDoList]);
  };
  const handleDelete = (id) => {
    toDoList[id - 1].isDeleted = true;
    setToDoList([...toDoList]);
  };
  const handleUncomplete = (id) => {
    toDoList[id - 1].complete = false;
    setToDoList([...toDoList]);
  };
  const handleRestore = (id) => {
    toDoList[id - 1].isDeleted = false;
    setToDoList([...toDoList]);
  };

  return (
    <div className="App">
      <Header />
      <ToDoform addTask={addTask} />
      <div className="col1">
        <CompletedList
          toDoList={toDoList}
          handleUncomplete={handleUncomplete}
          handleDelete={handleDelete}
        />
        <ToDoList
          toDoList={toDoList}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
        />
        <DeletedList toDoList={toDoList} handleRestore={handleRestore} />
      </div>
    </div>
  );
};

export default Home;
