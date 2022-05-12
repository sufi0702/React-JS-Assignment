import React from "react";
import "../assets/css/header.css";
const Header = () => {
  return (
    <header>
      <h1 className="heading">
        ToDo List <i className="fa-solid fa-list-check"></i> using React Hooks{" "}
        <i className="fa-brands fa-react"></i>
      </h1>
    </header>
  );
};

export default Header;
