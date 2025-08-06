import { useState, useEffect } from "react";

const Timer = () => {

  const [seconds, setSeconds] = useState(0);

  // 타이머 시작 & 정리
  useEffect(() => {
    console.log("Timer Start");
    const interval = setInterval(() => {setSeconds((prev) => {return prev + 1})}, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer Clear(Unmount)");
    };

  }, []);

  // seconds 변경 시마다 로그 찍기
  useEffect(() => {console.log(`seconds: ${seconds}`);}, [seconds]);
  
  return (
    <>
      <h2>Timer: {seconds}s</h2>
    </>
  );

}

export default Timer;