import { useState,useRef,useEffect} from 'react'
import { ReactTyped } from "react-typed";
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
      <section className='flex justify-center items-center h-[90vh] '>
        <div className='flex flex-col justify-center items-center h-full w-[80%] '>
          <div className=' h-[10%] w-full flex justify-center items-center'>
            <p className='text-xl'>Hi,I'm</p>
          </div>
          <div className=' h-[15%] w-full'>
            <h3 className='text-6xl font-bold text-center' >
              <ReactTyped strings={['Victor Martinez']} typeSpeed={80} backSpeed={30} loop />
            </h3>
          </div>
          <div className=' h-[10%] w-full flex justify-center items-center'>
            <h1 className=' text-2xl'>Full-Stack Web Developer</h1>
          </div>
          <div className=' w-full h-[20%] '>
            <p className='text-center text-xl'>I create <span>beautiful</span>, <span>functional</span> web applications using <span>modern</span> technologies.Passionate about clean code and exceptional user experiences.</p>
          </div>


          {/* Contact Social Media */}
          <div className='flex justify-center items-center w-full'>
            <div className=' w-1/2 flex justify-around items-center mt-[15px]'>
              <div>
                <i class="fa-brands fa-github text-3xl"></i>
              </div>
              <div>
                <i class="fa-brands fa-linkedin text-3xl"></i>
              </div>
              <div>
                <i class="fa-solid fa-envelope text-3xl"></i>
              </div>
            </div>
          </div>

          <div>
            <i id='slideDownArrow' class="fa-solid fa-arrow-down text-2xl"></i>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className='bg-stone-100 flex flex-col justify-center items-center md:flex-row md: md:justify-evenly md:items-start'>
        {/* <div className='bg-red-500'>
          <h2>Skills & Technologies</h2>
        </div> */}
        {/* Frontend Skills */}
        <div className='skills'>
          <div>
            <h2>Frontend</h2>
          </div>
          <div className='w-[80%]'>
            <ul id='skillsAndTechnologies'>
              <li >React.js</li>
              <li >Typescript</li>
              <li >Bootstrap</li>
              <li >Tailwind CSS</li>
              <li >Material UI</li>
              <li >Shadcn UI</li>
              <li >Vite</li>
              <li >Vue.js</li>
              <li >HTML</li>
              <li >CSS</li>
              <li >Javascript</li>
            </ul>
          </div>
        </div>
         {/* Backend Skills */}
        <div className='skills'>
          <div>
            <h2>Backend</h2>
          </div>
          <div className='w-[80%]'>
            <ul id='skillsAndTechnologies'>
              <li >Node.js</li>
              <li >Express.js</li>
              <li >Python</li>
              <li >Flask</li>
              <li >RestAPIs</li>
              <li>Sequelize</li>
              <li>SQLAlchemy</li>
            </ul>
          </div>
        </div>
         {/* Database Skills */}
        <div className='skills'>
          <div>
            <h2>Database</h2>
          </div>
          <div className='w-[80%]'>
            <ul id='skillsAndTechnologies'>
              <li >PostgreSQL</li>
              <li >MySQL</li>
              <li >MongoDB</li>
              <li >Supabase</li>
              <li >Firebase</li>
            </ul>
          </div>
        </div>
         {/* Other Skills */}
        <div className='skills'>
          <div>
            <h2>Others</h2>
          </div>
          <div className='w-[80%]'>
            <ul id='skillsAndTechnologies'>
              <li >Git</li>
              <li >Linux</li>
              <li >Vercel</li>
              <li >Postman</li>
              <li >Vite</li>
              <li >AWS(EC2,RDS)</li>
              <li >Google Cloud Platform</li>
              <li >Azure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section>
        <div>
          <h1>Projects</h1>
        </div>
        <div>
          <div className=''>
            <div>
              <img src="https://placehold.co/300x200" alt="Workland web application project image" />
            </div>
            <div>
              <div>
                <h3>Workland</h3>
              </div>
              <div>
                <p>Workland is a web platform that connects freelancers with clients in need of professional services. It eliminates high commissions and entry barriers, making it easy for talent and clients to find each other and collaborate directly. Designed with simplicity in mind, Workland empowers users to create profiles, post jobs, and start working — faster and without intermediaries.</p>
              </div>
              <div>
                <ul>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                  <li>Python</li>
                  <li>Flask</li>
                  <li>SQLAlchemy</li>
                  <li>Git</li>
                  <li>Cloudinary</li>
                  <li>Paypal</li>
                </ul>
              </div>
              <div>
                <a href="#">Live Project</a>
                <a href="#">View Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
