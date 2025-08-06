import { useState } from 'react'
import './App.css'
import Timer from './component/Timer'
import HookCanvas from './component/HookCanvas';
import DrawingCanvas from './component/DrawingCanvas';
import PopupMenu from './component/PopupMenu';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Timer</h2>
      <button onClick={() => {setShow((prev) => {console.log(prev); return !prev});}}>
        {show ? "Delete Timer" : "Show Timer"}
      </button>
      <hr />
      {show && <Timer />} {/* show가 true일때만 <Timer /> 보여짐 */}
      <hr />
      <HookCanvas />
      <hr />
      <DrawingCanvas />
      <hr />
      <PopupMenu />
    </div>
  )
}

export default App
