import React, { useRef } from "react";

function FocusInput() {

  const inputRef = useRef(null); // DOM 참조 객체 생성

  const handleClick = () => {
    inputRef.current.focus(); // DOM에 직접 접근
  };

  // ref 속성을 이용해 useRef()객체와 연결함
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="여기에 입력하세요" /><br />
      <button onClick={handleClick}>입력창에 포커스</button>
    </div>
  );

}

export default FocusInput;