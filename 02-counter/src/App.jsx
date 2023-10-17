import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if (count >= 0 && count < 20) {
      setCount(count + 1)
    } else {
      count = 20
    }
    console.log(count)
  }

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      count = 0
    }
    console.log(count)
  }

  //Value Increse by 4
  const ExtraValue = () => {
    setCount(prewValue => prewValue + 1)
    setCount(prewValue => prewValue + 1)
    setCount(prewValue => prewValue + 1)
    setCount(prewValue => prewValue + 1)
  }

  return (
    <>
      <h1>Counter Value : {count}</h1>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Remove Value</button> <br />
      <button onClick={ExtraValue}>Add Extra Value</button>
    </>
  )
}

export default App
