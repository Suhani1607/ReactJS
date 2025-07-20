import React from "react";
import { Routes } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Course from "./components/Course";
import StudentId from "./components/StudentId";
import StudentCourse from "./components/StudentCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },

  {
    path: "/About",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      {
        path: "StudentId",
        element: (
          <div>
            <StudentId />
          </div>
        ),
      },
      {
        path: "StudentCourse",
        element: (
          <div>
            <StudentCourse />
          </div>
        ),
      },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path: "/Course",
    element: (
      <div>
        <Navbar />
        <Course />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
