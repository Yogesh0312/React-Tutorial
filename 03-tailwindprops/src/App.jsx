import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  

  let object = {
    name : 'MyName',
    age : 25
  }
  return (
    <>
      <h1 className='bg-green-400 text-black rounded p-2 mb-3'>Tailwind CSS</h1>
      <Card userName='Name 1' btnText='Click Me' myObject={object}/>
      <Card userName='Name 2'/>
    </>
  )
}

export default App
