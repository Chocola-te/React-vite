import { useState } from "react";

// state에 여러개의 속성을 가지고 있는 객체를 저장
// color: 속성 글씨 색상, bgcolor: 배경색
// input 태그에 입력한 값으로 글씨 색과 배경색을 변경해보자
const ChangeColor = () => {
  
  const [cssh1, setCssh1] = useState({color: "black", backgroundColor: "white"});
  const [color, setColor] = useState("black");
  const [bgcolor, setBgcolor] = useState("white");

  function isValidCssColor(color) {
    const s = new Option().style; // <option> 태그 생성 후 style 접근
    s.color = color; // color값이 유효하다면 s.color에 저장, 유효하지 않다면 빈 문자열 ""
    return s.color !== ""; // 유효하다면 저장된 색상 return, 유효하지 않다면 빈 문자열 return
  }

  const changeColor = () => {
    if (isValidCssColor(color) && isValidCssColor(bgcolor)) { // 빈 문자열이 return될 경우 isValiCssColor(변수)는 false가 되어 else로 넘어감
      setCssh1({color:color, backgroundColor:bgcolor});
    } else {
      alert("올바른 색상이 아님");
    }
  }

  return (
  <>
    <h1 style={cssh1}>h1태그입니다.</h1>
    글자색: <input /*type="color"*/ value={color} onChange={(e) => {setColor(e.target.value)}} />&nbsp;
    배경색: <input /*type="color"*/ value={bgcolor} onChange={(e) => {setBgcolor(e.target.value)}} /><br />
    <button onClick={changeColor}>h1 색상 변경</button>
  </>
  );

}
export default ChangeColor;