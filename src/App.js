import React, { useState } from "react";
import "./styles.css";
import { ThemeContext } from "./context";
import Home from "./Home";
// import HomeWithoutHooks from "./HomeWithoutHooks";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
      {/* <HomeWithoutHooks /> */}
    </ThemeContext.Provider>
  );
}
