import { React,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

 // let counter=5;
  const addValue=()=>{
    counter+=1;
    setCounter(counter);
    if(counter>=20){
      counter=20;
      setCounter(counter);
    }
  }

  const removeValue=()=>{
     counter-=1;
     setCounter(counter);
     if(counter<=0){
      counter=0;
      setCounter(counter);

     }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2><br />
      <button onClick={addValue}>Add value</button><br /><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
