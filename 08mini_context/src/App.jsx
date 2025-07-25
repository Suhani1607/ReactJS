import React from "react";
import UserContextProvider from "./userContextProvider";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
