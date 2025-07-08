import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")} className="outline-none rounded-full px-4  py-1  text-white" style={{backgroundColor:"red"}}>red</button>

            <button onClick={()=>setColor("green")} className="outline-none rounded-full px-4  py-1  text-white" style={{backgroundColor:"green"}}>green</button>


            <button onClick={()=>setColor("grey")} className="outline-none rounded-full px-4  py-1  text-white" style={{backgroundColor:"grey"}}>grey</button>


            <button onClick={()=>setColor("purple")} className="outline-none rounded-full px-4  py-1  text-white" style={{backgroundColor:"purple"}}>purple</button>


            <button onClick={()=>setColor("black")} className="outline-none rounded-full px-4  py-1  text-white" style={{backgroundColor:"black"}}>black</button>


            <button onClick={()=>setColor("white")} className="outline-solid rounded-full px-4  py-1  text-black" style={{backgroundColor:""}}>white</button>
          </div>

          
        </div>
      </div>

    </>
  )
}

export default App
