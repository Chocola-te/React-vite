const Button1 = ({text, color="black", children}) => {

  // 이벤트 발생 시 수행할 함수
  const onClickButton1 = (event) => {
    console.log(event);
    console.log(text);
  }

  return (
    // 매개변수가 없다면 함수 객체 그대로
    <button onClick={onClickButton1} style={{color : color}}>
      {text}
      {children}
    </button>
  );
}

export default Button1;