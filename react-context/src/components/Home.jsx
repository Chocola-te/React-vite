import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home = () => {

  const {theme, themeToggle, text, textToggle, tswitch, tswitchToggle} = useContext(ThemeContext);

  return (
    <div style={{backgroundColor: theme === "light" ? "white" : "black",
                 color: theme === "light" ? "black" : "white"}}>
      <span style={{color: text === "dark" ? "black" : "white"}}>
        글자색: {text}&nbsp;/&nbsp;
      </span>
      <span>
        <img src={tswitch === "off" ? "/on.svg" : "/off.svg"} style={{width: "50px"}}/>
      </span>
      테마: {theme}
      <button onClick={() => {themeToggle(); textToggle(); tswitchToggle();}}>테마 전환</button>
    </div>
  );

}

export default Home;