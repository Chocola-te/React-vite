import { useState } from "react";
import Light from "./Light";

const Count = () => {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <Light />
      <h1>{count}</h1>
      {/* state값은 직접 변경하지 않는다. */}

      <button onClick={() => {
        setCount(count + 1);
      }}> + </button>

      <button onClick={() => {
        setCount(count - 1);
      }}> - </button>
    </>
  );

}

export default Count;