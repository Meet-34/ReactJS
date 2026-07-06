import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Lily",
    age: 18
  }

  let newArr = [1, 2, 3];

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl w-80 mt-10'>Image Gallery</h1>
    {/* <Card obj={myObj} arr={newArr}/> */}
    <Card username="Lily" btnText="Pretty View"/>
    <Card username="Rose" btnText="Mesmerizing View"/>
    </>
  )
}

export default App
