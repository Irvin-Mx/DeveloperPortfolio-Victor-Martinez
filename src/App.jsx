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
          <ul className='hidden md:flex justify-around items-center w-[30%] text-gray-500'>
            <li className='hover:text-blue-700 hover:cursor-pointer'>About</li>
            <li className='hover:text-red-700 hover:cursor-pointer'>Skills</li>
            <li className='hover:text-orange-700 hover:cursor-pointer'>Porjects</li>
            <li className='hover:text-purple-700 hover:cursor-pointer'>Contact</li>
          </ul>
          <button className=' rounded-full p-2 active:bg-violet-700 hover:cursor-pointer hover:bg-orange-500'><span><i className="fa-solid fa-language"></i></span>Lang</button>
        </div>
      </header>

      {/* hero section */}
      <section className='flex justify-center items-center h-[90vh] bg-green-200'>
        <div className='flex flex-col justify-center items-center h-full w-[80%] bg-red-400'>
          <div className='bg-yellow-500 h-[10%] w-full flex justify-center items-center'>
            <p className='text-xl'>Hi,I'm</p>
          </div>
          <div className='bg-blue-300 h-[15%] w-full'>
            <h3 className='text-6xl font-bold text-center'>Victor Martinez</h3>
          </div>
          <div className='bg-orange-600 h-[10%] w-full flex justify-center items-center'>
            <h1 className='bg-pink-500 text-2xl'>Full-Stack Web Developer</h1>
          </div>
          <div className='bg-red-600 w-full h-[20%] '>
            <p className='text-center text-xl'>I create <span>beautiful</span>, <span>functional</span> web applications using <span>modern</span> technologies.Passionate about clean code and exceptional user experiences.</p>
          </div>
          
          
          
          <div className='flex'>
            <div>
              <i class="fa-brands fa-github"></i>
            </div>
            <div>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i>
            </div>
          </div>

          <div>
            <i id='slideDownArrow' class="fa-solid fa-arrow-down text-2xl"></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
