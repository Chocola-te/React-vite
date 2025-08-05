const FormExample = () => {

  const onSubmitForm = (event) => {
    event.preventDefault(); // 액션 지정 페이지 이동 막기
    alert("폼 제출"); // 비동기 통신으로 서버에 데이터 전송
  };

  return (
    <>
      <form onSubmit={() => onSubmitForm}>
        <input type="text" name="text1" />
        <button type="submit">제출</button>
      </form>
    </>
  );

}

export default FormExample;