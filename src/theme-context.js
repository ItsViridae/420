import React from "react";

export const themes = {
  normal: {
    //accentColor: "Blue",
    background: "white",
    color: "black",
    //buttonTextColor: "black",
    padding: "5px",
  },
  dueteranope: {
    //accentColor: "#4483f4",
    background: "#a8931e",
    color: "white",
    //buttonTextColor: "#a8931e",
  },
  protanope: {
    //accentColor: "#4e86f5",
    background: "#786624",
    color: "white",
    //buttonTextColor: "#786624",
  },
  tritanerope: {
    //accentColor: "#fc9fb2",
    background: "#fddce5",
    color: "white",
    //buttonTextColor: "#fddce5",
  },
};

const ThemeContext = React.createContext(themes.normal);

export default ThemeContext;
