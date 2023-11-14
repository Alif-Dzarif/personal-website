import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
      className={`back-body relative w-screen h-full ${bgTime} bg-fixed ${textColor} theme transition-colors font-mono px-40 py-20`}
    >
      <div className=''>
        <div className='leading-[30px]'>
          <button onClick={() => navigate('/')} className={`absolute active:bg-yellow-500 hover:-translate-x-7 transition-transform bg-yellow-400 w-52 h-14 text-black font-bold text-xl inline-block`}>
            GO BACK
          </button>
          <h1 className='text-center text-5xl font-bold'>ALL PROJECTS</h1>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-6 px-0 mt-20'>
        {project__data.map((project, idx) => (
          <ProjectCard project={project} key={idx} index={idx} />
        ))}
      </div>
    </motion.div>
  )
}
