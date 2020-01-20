import React, { useContext } from "react";
import { ThemeContext } from "./context";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`home home-${theme}`}>
      Home {theme}
      <div>
        <button onClick={() => setTheme("dark")}>dark theme</button>
        <button onClick={() => setTheme("light")}>light theme</button>
      </div>
    </div>
  );
};

export default Home;
