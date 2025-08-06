import { useEffect, useRef, useState } from "react";

const HookCanvas = () => {
  const paper = useRef();
  const [pen, setPen] = useState(); // 2D context

  useEffect(() => {
      setPen(paper.current.getContext("2d")); // canvas DOM
  }, []);

  return (
    <canvas onMouseMove={(e) => {
      pen.fillRect(
        e.nativeEvent.offsetX - 2.5,
        e.nativeEvent.offsetY - 2.5,
        5,
        5
      );
    }}
      ref={paper}
      width={100}
      height={100}
      style={{border: "black solid 1px"}}
    />
  );
};

export default HookCanvas;