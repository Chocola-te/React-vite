// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
import Child from './components/Child';
import Nav from './components/Nav';

// 함수 컴포넌트 구현(첫글자 반드시 대문자)
function App() {
  // const [count, setCount] = useState(0)

  const b1Props = {
    text: '메일', color:'green', a : 1, b : 2
  }

  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ]

  return (
    <>
      <Header /> {/* 태그 호출 - 현재 같은 문서이므로 import 없이 바로 호출 */}
      <h1>안녕 리액트 :D</h1>
      <Main />
      {/* 객체 안의 속성들을 컴포넌트의 props로 한꺼번에 전달 */}
      <Button {...b1Props} />
      <Button text={"클라우드"}/>
      <Button text={"apple"}>
        <Child />
        {'hello'}
      </Button>
      <Nav topics={topics} />
      {/* 객체 안의 속성들을 컴포넌트의 props로 한꺼번에 전달 */}
      <Footer />
    </>
  )
}

export default App;
// 외부에서 App 사용자 태그를 사용할 수 있도록 추출