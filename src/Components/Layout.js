import React, { useContext } from "react";
import ThemeContext from "../theme-context";

const Layout = () => {
  const themes = useContext(ThemeContext);
  return <div style={themes}> {JSON.stringify(themes)} </div>;
};

export default Layout;
