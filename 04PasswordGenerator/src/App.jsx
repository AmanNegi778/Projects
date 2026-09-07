import { useCallback, useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [Length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")
  

  const Passwordref = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (NumberAllowed) str += "0123456789"
    if (CharAllowed) str += "!@#$%^&*()`"

    for (let i = 1; i <Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [Length, NumberAllowed, CharAllowed, setPassword])

  const copypasswordtoclipboard = useCallback(() => {
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() =>{PasswordGenerator()}, [length,NumberAllowed,NumberAllowed,PasswordGenerator])
  return (
    <>
      <div className='w-full text-center max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-600'>
        Password Generator

        <div className='flex shadow rounded-lg overflow-hidden mb-4  bg-white'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-4 px-3'
            placeholder='Password'
            readOnly
            ref={Passwordref}
          />
          <button onClick={copypasswordtoclipboard} className='text-white bg-blue-600 '>Copy</button>

        </div>
        <div>
          <input type="range"
            min={6}
            max={100}
            value={Length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>length: {Length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={NumberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={CharAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label >Character</label>
        </div>

      </div>
    </>
  )
}

export default App
