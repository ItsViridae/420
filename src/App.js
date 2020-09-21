import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorBlindButtons from "./Components/ColorBlindButtons";
import ThemeContext, { themes } from "./theme-context";
import Layout from "./Components/Layout";

function App() {
  const [theme, setTheme] = useState(themes.normal);
  return (
    <ThemeContext.Provider value={theme}>
      <Layout />
      <ColorBlindButtons />
    </ThemeContext.Provider>
  );
}

export default App;
