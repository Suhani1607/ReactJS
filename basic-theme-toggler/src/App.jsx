import { useState, createContext } from "react";
import "./index.css";
import ChildA from "./components/ChildA";

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({ name: "Suhani" });
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext };
