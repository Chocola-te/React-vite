import { useState, useRef } from "react"

const Register = () => {

  // 상태값 저장. 값이 바뀌어도 리렌더링 되지 않음
  // 렌더링이 되어도 값이 변하지 않음
  const refObj = useRef(0);
  // console.log(refObj.current);
  
  const [renderCount, setRenderCount] = useState(0);
  const increaseRef = () => {
    refObj.current++; // 리렌더링 안함(화면에 반영X)
    console.log("refObj.current: " + refObj.current);
  }

  const forceRender = () => {
    setRenderCount((prev) => prev + 1)
  } // 리렌더링 발생
    // prev: 현재 상태값. 변수를 직접 사용하지 않는다.
  

  return (
    <>
      <p>
        useRef 값: {refObj.current}<br/>
        <button onClick={increaseRef}>useRef값 증가</button>
        <button onClick={forceRender}>강제 리렌더링</button>
      </p>
    </>
  );
  
}
export default Register;