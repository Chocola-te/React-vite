import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("dark");
  const [tswitch, setTswitch] = useState("off");

  const themeToggle = () => {
    setTheme((prev) => (prev === "light" ? "black" : "light"));
  };

  const textToggle = () => {
    setText((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const tswitchToggle = () => {
    setTswitch((prev) => (prev === "off" ? "on" : "off"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, themeToggle, text, textToggle, tswitch, tswitchToggle }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
  
};