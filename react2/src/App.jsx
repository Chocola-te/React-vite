import './App.css'
import Button1 from './components/Button1'
import Button2 from './components/Button2'
import FormExample from './components/Form'

// useState 사용 시 import 필요
import { useState } from 'react'

import Count from './components/Count'
import Parent from './components/Parent'
import ChangeColor from './components/ChangeColor'

function App() {

  // const state = useState(1);
  // console.log(state);

  const [state, setState] = useState(0);
  console.log(state);

  return (
    <>
      {/*
      <FormExample />
      <Button1 text={"클라우드"} color={"blue"} a={1}></Button1>
      <Button1 text={"apple"}></Button1>
      <Button2 />
      */}
      
      {/*
            <h1>{state}</h1>
      // 버튼을 눌렀을 때 리렌더링되어 값이 더해진다.
      <button onClick={() => {
        setState(state + 1);
      }}> + </button>
      */}

      {/* setState는 비동기로 버튼을 클릭해도 Form input데이터가 변하지 않는다. */}
      <FormExample />
      <hr />
      <Count />
      <hr />
      <Parent />
      <hr />
      <ChangeColor />
    </>
  )
}

export default App
