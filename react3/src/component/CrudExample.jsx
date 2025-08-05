import { useState, useRef } from "react";
// 이름을 입력하고 추가
// 이름 리스트 보기
// 이름 수정하기
//     ㄴ수정 중 삭제
// 이름 삭제하기

const CrudExample = () => {
  
  const [people, setPeople] = useState([]); // 목록 상태
  const [name, setName] = useState(""); // 입력 필드 상태
  const [editIndex, setEditIndex] = useState(null); // 수정 모드 여부
  const inputRef = useRef();

  // 항목 추가 또는 수정
  const handleSubmit = () => {
    if (name.trim() === "") {
      alert("이름을 입력하라고 임마");
      return;
    }

    if (editIndex === null) {
      // 추가
      setPeople([...people, name]); // people 배열을 복사, 마지막 index 뒤에 name을 추가, people 배열에 저장한다.
    } else {
      // 수정
      const updated = [...people]; // people 배열을 복사
      updated[editIndex] = name; // 복사된 배열의 수정 세팅된 editIndex의 name을 전달된 name으로 변경
      setPeople(updated); // 수정된 name을 가진 people배열을 저장
      setEditIndex(null); // 수정 세팅된 editIndex를 null로 바꿔 수정모드 종료
    }

    setName("");
    inputRef.current.focus();
  };

  // 수정 시작
  const handleEdit = (index) => {
    setName(people[index]);
    setEditIndex(index);
    inputRef.current.focus();
  };

  // 항목 삭제
  const handleDelete = (index) => {
    const updated = people.filter((_, i) => i !== index);
    // 전달받은 index번호를 _언더바에 저장, people의 총 index개수와 비교 | _언더바는 다른 문자가 와도 상관없음 (사용하지 않는 변수 = _(언더바))
    // 전달받은 (index)가 만약 2라면 2와, 첫번재 index(0)과 비교 => 0 !== 2 true이므로 people의 0번 index는 남겨둔다.
    // 전달받은 index(2)와 i(2) => i(2) !== index(2) false 이므로 people의 배열 중 해당 index는 삭제된다.
    setPeople(updated);
    // 위에서 새로 세팅된 people 배열을 다시 저장한다.

    // 수정 중이던 항목이 삭제되면 editIndex 초기화
    if (editIndex === index) {
      setEditIndex(null);
      setName("");
    }
  };

  return (
    <div style={{padding: "20px"}}>
      <h2>CRUD</h2>

      <input
        ref={inputRef}
        value={name}
        placeholder="이름 입력"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editIndex === null ? "추가" : "수정 완료"}
      </button>

      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person}{" "}
            <button onClick={() => handleEdit(index)}>수정</button>&nbsp;
            <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default CrudExample;