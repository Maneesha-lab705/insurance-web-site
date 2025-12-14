import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NaveBar from './commen/compopnent/NaveBar/NaveBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NaveBar />
      </div>
    </>
  )
}

export default App
