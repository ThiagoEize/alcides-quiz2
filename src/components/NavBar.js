import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const totalquizs = 5;

  return (
    <div className="nav-container">
      <span className="quiz-indicator">
        Passo {location.pathname.split("/")[2]}/{totalquizs}
      </span>
      <div className="quizs">
        {[...Array(totalquizs).keys()].map((index) => {
          const quizNumber = index + 1;
          return (
            <NavLink
              to={`/quiz/${quizNumber}`}
              key={index}
              className={({ isActive }) => `quiz ${isActive ? "active" : ""}`}
            ></NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
