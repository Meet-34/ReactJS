import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if(counter < 20){
      //? This guarantees you're always updating from the latest state - Functional update
      setCounter(prevCounter => prevCounter + 1);
    }
  }

  const removeValue = () => {
    if(counter > 0){
      //? This guarantees you're always updating from the latest state - Functional update
      setCounter(prevCounter => prevCounter - 1);
    }
  }

  return (
    <>
    <h1>Hello React</h1>
    <h3>counter: {counter}</h3>

    <button onClick={addValue}>Increase value</button>
    <br/>
    <button onClick={removeValue}>Decrease value</button>
    </>
  )
}

export default App
