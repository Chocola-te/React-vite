import { useReducer } from "react";

const Change = () => {

  const initialExpression = { expression: <img src="/emotion1.png" /> };

  function changeEx(oldstate, action) {
    switch (action.num) {
      case "first":
        return {expression: <img src="/emotion1.png" />};
      case "second":
        return {expression: <img src="/emotion2.png" />};
      case "third":
        return {expression: <img src="/emotion3.png" />};
      case "fourth":
        return {expression: <img src="/emotion4.png" />};
      case "fifth":
        return {expression: <img src="/emotion5.png" />};
      default:
        return initialExpression;
    }
  };

  const [state, dispatch] = useReducer(changeEx, initialExpression);

  return (
    <>
      {state.expression}
      <button onClick={() => dispatch({num: "first"})}>e1</button>
      <button onClick={() => dispatch({num: "second"})}>e2</button>
      <button onClick={() => dispatch({num: "third"})}>e3</button>
      <button onClick={() => dispatch({num: "fourth"})}>e4</button>
      <button onClick={() => dispatch({num: "fifth"})}>e5</button>
    </>
  );

}

export default Change;