import { Link } from "react-scroll"
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { MdNightlightRound } from "react-icons/md";
import animationData from './assets/Animation - 1729267764753.json'
import Lottie from "lottie-react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import About from "./components/About";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme')

    if(savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  },[])

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)

    if(newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="all bg-[var(--bg-color)] text-[var(--text-color)] bg-color-transition relative">
      <div className="container mx-auto min-h-[100vh]">
      <div className="nav h-[72px] flex justify-between items-center 2xl:px-12 bg-[#342f43] backdrop-blur-md p-6">
        <div className="logo text-xl">
          logo
        </div>
        <div className="link">
          <ul className="flex justify-between items-center" >
            <li className="mr-8">
              <Link className="text-xl" to="aboutus" smooth={true} duration={500} >About us</Link>
            </li>
            <li className="mr-8">
              <Link className="text-xl" to="skills" smooth={true} duration={500} >Skills</Link>
            </li>
            <li className="mr-8">
              <Link className="text-xl" to="aboutus" smooth={true} duration={500} >Projects</Link>
            </li>
            <li className="mr-8">
              <Link className="text-xl" to="skills" smooth={true} duration={500} >Contact us</Link>
            </li>
            <button onClick={toggleDarkMode} >{isDarkMode ? <CiLight size={24}     /> : <MdNightlightRound size={24} /> }</button>
          </ul>
        </div>
      </div>
      {/* landing */}
      <div className="flex 2xl:px-12" style={{height:"calc(100vh - 72px)"}}>
        <div className="content flex relative flex-col justify-center w-2/3">
          <h1 className="text-5xl font-semibold" style={{lineHeight:"1.4"}}>Welcome to <br /> Othmane-mk Portfolio</h1>
          <p className="mt-20 mb-10">I am a passionate developer specializing in Laravel and React.js. 
            My mission is to create robust and user-friendly web applications 
            tailored to meet your needs. With a keen eye for detail and a commitment to excellence, 
            I strive to bring your ideas to life through innovative solutions. 
            Let's build something great together!
          </p>
          <motion.button 
            className="flex items-center btn"
            animate={{y:[0,-5,0]}}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            >
            Scroll 
            <MdKeyboardDoubleArrowDown />
          </motion.button>
        </div>
        <div className="img_svg flex justify-center items-center w-1/3">
          <div className="">
            <Lottie animationData={animationData} />
          </div>
        </div>  
      </div>
      </div>
      
      <About name="aboutus" />
    </div>
  )
}

export default App
