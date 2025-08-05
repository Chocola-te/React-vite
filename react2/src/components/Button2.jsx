const Button2 = () => {

  // 이벤트 발생 시 수행할 함수
  const onClickButton2 = (name) => {
    alert(name + '님이 클릭했습니다.');
  };

  const onChangeInput = (event) => {
    console.log(`입력값: ${event.target.value}`)
  };

  return (
    <>
      {/* <button onClick={onClickButton2('김솔데')}> */}
            {/* 매개변수가 있을 때 즉시 실행 문제 */}

      <button onClick={() => onClickButton2('김솔데')}>
        클릭
      </button>

      <input onChange={onChangeInput} />
    </>
  );
  
}
export default Button2;