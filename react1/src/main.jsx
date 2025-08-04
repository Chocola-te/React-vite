// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    자바스크립트에서는 엄격 모드가 있다.
    코드 파일 상단에 "use strict"를 써 놓으면 자바스크립트를 실행할 때 조금 더 엄격하게 코드를 검사한다.
    리액트에도 이와 유사한 목적으로 사용하는 <StrictMode />라는 컴포넌트가 있다.

    Appfunction 호출
    App.jsx의 function App() { }을 return하고 있는 App 컴포넌트를 실행
    <App />
    </StrictMode>,
    ) */
   
   const Hello = () => {
     return <div>Hello</div>
    }
    
    // React는 하나의 부모 요소로 래핑된 jsx 노드만 렌더링
    createRoot(document.getElementById('root')).render(
      // <> </> << 부모 요소로 래핑
      // <Header, Main, Hello, Footer, ... /> 부모 요소안에 래핑된 import개체 jsx노드
      <>
        <App />
      </>
    )
    // App.jsx의 function App() { }을 return하고 있는 App 컴포넌트를 실행