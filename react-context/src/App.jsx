import './App.css'

import { ThemeProvider } from './components/ThemeContext'
import Home from './components/Home'
import { Parent } from './components/User'
import { Sub1 } from './components/Sub1'
import './components/style.css'

function App() {

  return (
    <> 
      <ThemeProvider>
        <Parent />
        <Home />
      </ThemeProvider>
      <div className='root'>
        <Sub1 />
      </div>
    </>
  )
}

export default App
