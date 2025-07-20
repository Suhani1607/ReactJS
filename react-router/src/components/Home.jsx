import React from "react";
import { useNavigate } from "react-router";
import Course from "./Course";

import "./Navbar.css";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Course");
  }

  return (
    <div className="Course">
      <button className="btn" onClick={handleClick}>
        Course Details
      </button>
    </div>
  );
};

export default Home;
