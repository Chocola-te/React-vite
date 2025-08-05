// 버튼 - 클릭 이벤트
// light의 값이 On이면 Off로 Off면 On으로 변경하는 함수로 리렌더링
// On이면 버튼text가 "끄기"로 아니라면 "켜기"로 바꾼다.
import { useState } from "react";
// 부모 리렌더링 -> 자식도 리렌더링
// 해당 컴포넌트의 state값은 그대로 유지
// 렌더링은 화면을 다시 그리는 것. 데이터 초기화 X
const Light = () => {

  const [light, setLight] = useState("OFF");

  // Count.jsx에 Light를 import했을 때 Count의 자식인 Light의 로그는
  // Count를 리렌더링했을 때 같이 리렌더링 된다.
  // 하지만 Light 컴포넌트의 state값은 그대로 유지된다.
  console.log("light: " + light);

  return (
    <>
      <fieldset style={{width: "100px"}}>
        <legend>light on/off</legend>
        <p>
          {light === "ON" ? <img src="/on.png" style={{width: "100px"}}/> : <img src="/off.png" style={{width: "100px"}}/>}
          </p>
        <p>{light}</p>
        <p onClick={() => {setLight(light == "ON" ? "OFF" : "ON")}}>
          {light === "ON" ? <img src="/on.svg" /> : <img src="/off.svg" /> }
        </p>
      </fieldset>
    </>
  );

}
export default Light;