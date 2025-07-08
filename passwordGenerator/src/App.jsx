import { useCallback, useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [numberAllowed, setnumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState(" ")
  const passwordRef =useRef(null)

   const copyPasswordToboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)},[password])
  const passwordGenerator=useCallback(
    () => {
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed)
        str+="0123456789";

      if(charAllowed)
        str+="!@#$%^&*+-~`/?><";
     


      for (let index = 1; index <= length; index++) {
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
          
      }
      setPassword(pass)
    },
    [length,numberAllowed,charAllowed,setPassword]
  )

  useEffect(()=>
    {passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator]
  )

  

return (
    <>
   
     
     <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500   ">
     <h1 className="text-white text-center text-3xl font-bold py-1 px-4 mt-4 ">Password Generator
     </h1>
      <div className='flex overflow-hidden mb-4'>
      <input 
      type="text"
       className='w-full bg-white mt-6 rounded-l-lg  px-4 py-1' placeholder='Password' 
       value={password} 
       readOnly  ref={passwordRef} />
      <button  
      onClick={copyPasswordToboard}
      className='bg-cyan-500 text-white px-4 mt-6  py-1 rounded-r-lg'> copy</button>
      </div>
      <span className='px-4 flex gap-2'>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer'  
      onChange={(e)=>{setlength(e.target.value)}} /> 

      length({length})
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"  className="outline-hidden"
        onChange={()=>{ 
          setnumberAllowed((prev)=>!prev)}
        }/>Number 
        <input type="checkbox"
        id='charInput'
        defaultChecked={charAllowed}
        onChange={()=>{setcharAllowed((prev)=>!prev)}} />Character

      
        
      </span>
     </div>
    </>
  )
}

export default App
  