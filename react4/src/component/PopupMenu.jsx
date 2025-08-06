import { useState, useEffect } from "react";

const PopupMenu = () => {

  const [popupCSS, setPopupCSS] = useState({
    position: "fixed",
    top: -100,
    left: -100,
    opacity: 0
  });

  const summonPopup = (e) => {
    e.preventDefault(); // 기존 기능있던거 막기
  };

  const summonMyPopup = (e) => {
    if (e.button === 2) {
      setPopupCSS({
        ...popupCSS,
        top: e.clientY,
        left: e.clientX,
        opacity: 1
      });

      document.addEventListener("click", () => {
        setPopupCSS({
          ...popupCSS,
          top: -100,
          left: -100,
          opacity: 0
        });
      })
      // setTimeout(() => {
      //   setPopupCSS({
      //     ...popupCSS,
      //     top: -100,
      //     left: -100,
      //     opacity: 0
      //   });
      // }, 3000);
    }
  };

  useEffect(() => {
    document.addEventListener("contextmenu", summonPopup); // contextmenu: 우클릭 이벤트 발생
    document.addEventListener("mouseup", summonMyPopup);
    return () => {
      document.removeEventListener("contextmenu", summonPopup);
      document.removeEventListener("mouseup", summonMyPopup);
    }
  }, []);

  return (
    <>
      <table border={1} style={popupCSS} bgcolor="lightgray">
        <tr>
          <td>
            <a href="https://www.naver.com">Naver</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.google.com">Google</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.daum.net">Daum</a>
          </td>
        </tr>
      </table>
    </>
  );

}

export default PopupMenu;