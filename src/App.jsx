import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NaveBar from './commen/component/NaveBar/NaveBar'
import GetStartedButton from './commen/component/GetStartedButton/GetStarterdButton.jsx'
import { Margin } from '@mui/icons-material'
import Home from './pages/Home/Home.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NaveBar />
      <div style={{position:'absolute',marginTop:'200px'}}>
      
        {/* <GetStartedButton /> */}

        <Home />      
      </div>
    </>
  )
}

export default App
