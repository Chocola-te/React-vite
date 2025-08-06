import { useEffect, useRef } from "react";

const DrawingCanvas = () => {

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const isDrawing = useRef(false); // 상태 저장용 (리렌더링 필요 없음)

  useEffect(() => { // Mount후 처음(한번) 렌더링
    const canvas = canvasRef.current;
    canvas.width = 100;
    canvas.height = 100;
    canvas.style.border = "2px solid black";

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round"; // 끝을 둥글게 butt(default), squre
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";

    ctxRef.current = ctx;
  }, []);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.beginPath(); // 새로운 그림 시작
    ctxRef.current.moveTo(offsetX, offsetY); // pen을 해당 위치로 이동 == 시작 위치
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY); // 선을 그림 == 시작위치에서 변경된 위치로
    ctxRef.current.stroke(); // 선을 화면에 출력
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
    ctxRef.current.closePath(); // 선 끝냄
  };

  return (
    <>
      <canvas 
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // 캔버스를 벗어날 때도 종료
      />
    </>
  );

};

export default DrawingCanvas;
