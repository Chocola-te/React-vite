import { useContext, createContext } from "react";

const divsContext = createContext({color: "blue"});

export function Sub1 () {

  const divs = {color: "red"};

  return (
    <div style={{border: "10px solid green"}}>
      Hello world!
      <divsContext.Provider value={divs}>
        <Sub2 />
      </divsContext.Provider>
        <Sub3 />
    </div>
  );
}

function Sub2 () {

  const divs = useContext(divsContext);

  return (
    <div style={divs}>
      Hello world!
    </div>
  );

}

function Sub3 () {

  const divs = useContext(divsContext);

  return (
    <div style={divs}>
      Hello world!
    </div>
  );

}