import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice.jsx';
import H1Size from "./components/H1Size.jsx";
import Btn from "./components/Btn.jsx";

function App() {

  // useSelector(): store에서 state 읽기
  const count = useSelector((state) => state.counter.value);
  // useDispatch(): action 보내기
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
      </div>
      <hr />
      <H1Size />
      <Btn />
    </>
  );
}

export default App;
// 1. slice 만들기(상태값, reduce)
// 2. store에 추가
// 3. Provider와 store 추가
// 4. useSelector와 useDispatch로 store에 저장된 값 사용