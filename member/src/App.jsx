import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MemberForm from './components/MemberForm';
import MemberList from './components/MemberList';
//npm i react-router-dom
function App() {
  return (

    <div style={{ padding: '20px' }}>
      <nav>
        <Link to="/" style={{ marginRight: '10px' }} className="list">Sign Up</Link>
        <Link to="/members" style={{ marginRight: '10px' }} className="list">Member List</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<MemberForm />} />
        <Route path="/members" element={<MemberList />} />
      </Routes>
    </div>

  )
}

export default App