import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  const [multipliedValue, setMultipliedValue] = useState(1)

  const MultiplyByFIve = () => {
    setMultipliedValue(value * 5)
    setValue(value + 1)
  }

  return (
    <>
      {/* When state is change app is rendered */}
      {/* when state is not change app is not rendered */}
      {/* object is always change -> app is always rendered */}
      <h1>Main Value : {value}</h1>
      <button onClick={MultiplyByFIve}>Multiply By 5</button>
      <h2>Multiplied Value : {multipliedValue}</h2>
    </>
  )
}

export default App
