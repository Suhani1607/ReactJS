import React from "react";
import { NavLink } from "react-router";

function About() {
  return (
    <div>
      <NavLink to="https://getcssscan.com/blog/how-to-remove-underline-from-link-css#:~:text=To%20remove%20underline%20from%20a%20link%20with%20CSS%2C%20add%20text,decoration%3A%20none%20to%20your%20code.&text=This%20code%20targets%20the%20CSS,fixed%20color%20to%20the%20links.">
        About
      </NavLink>
    </div>
  );
}

export default About;
