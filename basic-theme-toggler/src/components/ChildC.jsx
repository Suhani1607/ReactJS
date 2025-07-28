import React, { useState, useContext } from "react";
// import { UserContext } from "../App";
import { ThemeContext } from "../App";
import "./index1.css";

function ChildC() {
  //   const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <button className="btn" onClick={handleClick}>
        Change Theme
      </button>
    </>
  );
}

export default ChildC;
