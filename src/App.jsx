import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header section */}
      <header className='flex items-center justify-center h-[80px] border-b-[.1px] border-gray-200'>
        <div className='flex  justify-between w-[90%]'>
          <h2 className='flex justify-center items-center  text-xl font-semibold'>Victor Martinez</h2>
          <ul className='flex justify-around items-center w-[30%] text-gray-500'>
            <li className='hover:text-blue-700 hover:cursor-pointer'>About</li>
            <li className='hover:text-red-700 hover:cursor-pointer'>Skills</li>
            <li className='hover:text-orange-700 hover:cursor-pointer'>Porjects</li>
            <li className='hover:text-purple-700 hover:cursor-pointer'>Contact</li>
          </ul>
          <button className=' rounded-full p-2 active:bg-violet-700 hover:cursor-pointer hover:bg-orange-500'><span><i className="fa-solid fa-language"></i></span>Lang</button>
        </div>
      </header> 

      {/* hero section */}
      {/* <section>
        <h2>My name is </h2>
        <button class="rounded-full bg-purple-600">Save Changes</button>
        <h1 className='text-3xl text-blue-600 font-bold underline'>Victor Martinez</h1>
        <h3>I create beautiful, functional web applications using modern technologies. Passionate about clean code and exceptional user experiences.</h3>
      </section> */}
    </>
  )
}

export default App
