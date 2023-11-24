import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import ProjectCard from '../components/ProjectCard'
import project__data from '../data/projects.json'

export default function ProjectPages() {
  const navigate = useNavigate()
  const [bgTime, setBgTime] = useState('')
  const [textColor, setTextColor] = useState('text-black')
  const [buttonBorder, setButtonBorder] = useState('border-white')
  const [hour2, setHour2] = useState(new Date().getHours())

  const night = () => {
    setBgTime('bg-gradient-midnight');
    setTextColor('text-white');
    setButtonBorder('border-white');
  }

  const morning = () => {
    setBgTime('bg-gradient-early-morning');
    setTextColor('text-white');
    setButtonBorder('border-white');
  }

  const day = () => {
    setBgTime('bg-gradient-morning');
    setTextColor('text-black');
    setButtonBorder('border-black');
  }

  const afternoon = () => {
    setBgTime('bg-gradient-afternoon');
    setTextColor('text-black');
    setButtonBorder('border-black');
  }

  const evening = () => {
    setBgTime('bg-gradient-night');
    setTextColor('text-white');
    setButtonBorder('border-white');
  }

  const timer = () => {
    let hour = new Date().getHours();
    setHour2(new Date().getHours());

    if (hour < 4 || hour >= 19) night();
    else if (hour < 6) morning();
    else if (hour < 16) day()
    else if (hour < 18) afternoon()
    else evening()
  }

  useEffect(() => {
    const intervalHour = setInterval(timer, 1000);
    return () => clearInterval(intervalHour);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1 }
    },
    exit: {
      y: '-100vh',
      transition: { ease: "easeInOut" }
    },

  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`back-body relative w-screen max-[1000px]:py-10 max-[1000px]:px-10 h-full ${bgTime} bg-fixed ${textColor} theme transition-colors font-mono px-40 py-20`}
    >
      <div className='max-[1000px]:hidden'>
        <div className='min-[1001px]:leading-[30px]'>
          <button onClick={() => navigate('/')} className={`absolute active:bg-yellow-500 hover:-translate-x-7 max-[1000px]:mt-20 transition-transform max-[1000px]:w-28 bg-yellow-400 max-[1681px]:w-36 max-[1681px]:h-12 min-[1681px]:w-52 min-[1681px]:h-14 text-black font-bold max-[1000px]:text-base max-[1680px]:text-lg min-[1681px]:text-xl inline-block`}>
            GO BACK
          </button>
          <h1 className='text-center max-[1000px]:text-2xl max-[1000px]:mt-5 max-[1680px]:text-4xl min-[1681px]:text-5xl font-bold'>ALL PROJECTS</h1>
        </div>
      </div>
      <div className='min-[1001px]:hidden'>
        <div className='min-[1001px]:leading-[30px]'>
          <button onClick={() => navigate('/')} className={`active:bg-yellow-500 hover:-translate-x-7 max-[1000px]:mt-5 max-[1000px]:h-10 transition-transform max-[1000px]:w-28 bg-yellow-400 max-[1681px]:w-36 max-[1681px]:h-12 min-[1681px]:w-52 min-[1681px]:h-14 text-black font-bold max-[1000px]:text-base max-[1680px]:text-lg min-[1681px]:text-xl`}>
            GO BACK
          </button>
          <h1 className='text-center max-[1000px]:text-2xl max-[1000px]:mt-10 max-[1680px]:text-4xl min-[1681px]:text-5xl font-bold'>ALL PROJECTS</h1>
        </div>
      </div>
      <div className='grid max-[1000px]:grid-cols-1 max-[1680px]:grid-cols-3 min-[1681px]:grid-cols-4 gap-6 px-0 mt-20'>
        {project__data.map((project, idx) => (
          <ProjectCard project={project} key={idx} index={idx} hour2={hour2} />
        ))}
      </div>
    </motion.div>
  )
}
