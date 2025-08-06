import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>

      {/* 계속 보여질 Header */}
      <Header/>

      <Routes>
        {/* 기본 경로 Main */}
        <Route path="/" element={<Main />}></Route>

        {/* 고정경로인 /product/를 제외하고 명시 */}
        <Route path="/product/:productId/:fruit" element={<Product />}></Route>

        {/* 상단에 명시된 경로가 아닌 경로 요청은 NotFound */}
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
