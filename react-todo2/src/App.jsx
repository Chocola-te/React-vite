import { useReducer, useEffect } from "react";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import '../src/App.css';

// storage - 클라이언트 각각의 브라우저에 있는 저장 공간
// 브라우저가 꺼지면 같이 사라지는 데이터는 Session에 저장
const STORAGE_KEY = "todo_data";

    // 리듀서 = (상태값이, 바뀌면)
const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE":
      return [...state, action.data];
    case "TOGGLE":
      return state.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

function App() {
  // 상태값을 저장한 todos, 요청을 받으면 시행할 dispatch
  //                      dispatch가 실행되면 action객체를 가지고 reducer 메서드를 찾아감, todos의 초기값 []
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (rawData) {
      dispatch({ type: "INIT", data: JSON.parse(rawData) });
    }
  }, []);

  // todos값이 변할 때마다 local스토리지에 저장된 값 변경
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    // setItem()으로 데이터 저장
  }, [todos]);

  const onCreate = (text, priority) => {
    dispatch({
      type: "CREATE",
      data: {
        id: Date.now(),
        text,
        priority,
        done: false,
        createdDate: new Date().toISOString(),
      },
    });
  };

  const onToggle = (id) => {
    dispatch({ type: "TOGGLE", id });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <div className="App">
      <h1>todo 리스트</h1>
      {/* 생성 시에는 그냥 두고 */}
      <TodoEditor onCreate={onCreate} />
      {/* 수정, 삭제는 리렌더되어야하기 때문에 컴포넌트를 나눠두었다. */}
      {/* App에 기능을 전부 구현해두고 자식에서 가져다 쓸 수 있게 프로퍼티 */}
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      <ul>
        <h4>todo_list 미니 프로젝트 시나리오</h4>
        **목표
        <li style={{listStyle: "none"}}>
          사용자는 브라우저에서 할 일을 추가하고, 중요도를 설정하며,<br />
          완료/삭제할 수 있는 투두 리스트 앱을 사용합니다.<br />
          모든 데이터는 로컬 스토리지(localStorage)에 자동 저장되어, 새로고침 시에도 유지됩니다.
        </li><br />
        ** 사용자 시나리오
        <ol>
          <li>
            {/* 1. */}todo 항목 추가<br />
            사용자는 입력창에 텍스트를 입력하고, 중요도를 선택한 후 추가 버튼을 누릅니다<div className="br"></div>
            입력한 할 일이 목록에 나타납니다. 로컬 스토리지에도 저장됩니다.
          </li><br />
          <li>
            {/* 2. */}항목 삭제<br />
            각 항목 옆에 있는 삭제 버튼을 누르면 해당 항목이 목록과 로컬 스토리지에서 모두 제거됩니다.
          </li><br />
          <li>
            {/* 3.  */}중요도 정렬<br />
            중요도는 "높음", "중간", "낮음" 세 가지입니다.<br />
            상단의 정렬 버튼을 클릭하면 중요도 순서대로 목록이 정렬됩니다.<br />
            중요도 순서: 높음 {`>`} 중간 {`>`} 낮음<br />
            정렬 상태는 사용자가 새로고침하더라도 유지됩니다.
          </li><br />
          <li>
            {/* 5. */}새로고침 및 재방문<br />
            사용자가 페이지를 새로고침하거나 브라우저를 닫았다가 다시 열면, 마지막에 보던 상태 그대로 유지됩니다.
          </li>
        </ol>
      </ul>
    </div >
  );
}

export default App;