import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faXbox, faSteam } from '@fortawesome/free-brands-svg-icons'

import dummy from '../assets/images/dummy-image.jpg'

import honkai__impact from '../assets/logos/honkai__impact.png'
import scarlet__nexus from '../assets/logos/scarlet__nexus.png'
import cod__mobile from '../assets/logos/cod__mobile.png'

export default function General() {
  const navigate = useNavigate()
  const [bgTime, setBgTime] = useState('')
  const [textColor, setTextColor] = useState('text-black')
  const [buttonBorder, setButtonBorder] = useState('border-white')
  const [hour2, setHour2] = useState(new Date().getHours())
  const [clicked, setClicked] = useState(false)


  const clickedEvents = () => {
    if (!clicked) setClicked(true)
    else setClicked(false)
  }

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
  }, [])

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
          <button onClick={() => navigate('/')} className={`absolute active:bg-yellow-500 hover:-translate-x-4 transition-transform bg-yellow-400 max-[1681px]:w-36 max-[1681px]:h-12 min-[1681px]:w-52 min-[1681px]:h-14 text-black font-bold max-[1680px]:text-lg min-[1681px]:text-xl inline-block`}>
            GO BACK
          </button>
        </div>
      </div>
      <div className='mt-10 py-10 text-center'>
        <h1 className='max-[1680px]:text-5xl min-[1681px]:text-[60px] font-extrabold'>“Aller Anfang ist schwer” </h1>
      </div>
      <div className='grid gap-5 grid-cols-2 mt-10'>
        <div>
          <div className={`bg-gray-400 ${hour2 < 6 || hour2 >= 18 ? 'bg-opacity-40' : 'bg-opacity-10'} px-7 py-7 h-auto rounded-[30px]`}>
            <h1 className='text-center max-[1680px]:text-lg min-[1681px]:text-xl font-semibold mb-7'>ANOTHER ACCOUNT</h1>
            <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold'>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faSpotify} className='max-[1680px]:h-6 max-[1680px]:w-6 min-[1681px]:h-10 min-[1681px]:w-10' />
                <span className='ml-10 max-[1680px]:text-base min-[1681px]:text-xl'>Alif Dzarif</span>
              </div>
            </div>
            <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:mt-2 min-[1681px]:mt-3'>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faXbox} className='max-[1680px]:h-6 max-[1680px]:w-6 min-[1681px]:h-10 min-[1681px]:w-10' />
                <span className='ml-10 max-[1680px]:text-base min-[1681px]:text-xl'>ShiroNeko 69<span className=' text-gray-500'>#797</span></span>
              </div>
            </div>
            <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:mt-2 min-[1681px]:mt-3'>
              <div className='flex items-center'>
                <FontAwesomeIcon icon={faSteam} className='max-[1680px]:h-6 max-[1680px]:w-6 min-[1681px]:h-10 min-[1681px]:w-10' />
                <span className='ml-10 max-[1680px]:text-base min-[1681px]:text-xl'>ShiroNeko9  </span>
              </div>
            </div>
          </div>
          <div className={`bg-gray-400 ${hour2 < 6 || hour2 >= 18 ? 'bg-opacity-40' : 'bg-opacity-10'} px-7 py-7 h-auto mt-5 rounded-[30px]`}>
            <h1 className='text-center max-[1680px]:text-lg min-[1681px]:text-xl font-semibold mb-7'>PLAYED GAMES</h1>
            <div onClick={clickedEvents} className='bg-white cursor-pointer bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:h-20 min-[1681px]:h-28 overflow-hidden'>
              <div className={`${clicked ? 'max-[1680px]:-translate-y-[94px] min-[1681px]:-translate-y-[120px]' : ''} transition-transform`}>
                <div className='flex items-center justify-between'>
                  <img src={honkai__impact} className='h-auto max-[1680px]:w-20 min-[1681px]:w-32 ml-4' />
                  <p className='max-[1680px]:text-base min-[1681px]:text-lg'>HONKAI IMPACT 3</p>
                </div>
                <div className='h-20 w-full items-center mt-4 flex justify-between'>
                  <span className='ml-6 max-[1680px]:text-xl min-[1681px]:text-2xl'>ShiroNeko-Kun</span>
                  <span className='ml-6 max-[1680px]:text-xl min-[1681px]:text-2xl'>ID: 18523860</span>
                </div>
              </div>
            </div>
            <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:mt-2 min-[1681px]:mt-3 max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:h-20 min-[1681px]:h-28 overflow-hidden'>
              <div className=''>
                <div className='flex items-center justify-between'>
                  <img src={scarlet__nexus} className='h-auto max-[1680px]:w-32 min-[1681px]:w-52 mt-3' />
                  <p className='max-[1680px]:text-base min-[1681px]:text-lg mt-2'>SCARLET NEXUS</p>
                </div>
              </div>
            </div>
            <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:mt-2 min-[1681px]:mt-3 max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:h-20 min-[1681px]:h-28 overflow-hidden'>
              <div className=''>
                <div className='flex items-center justify-between'>
                  <img src={cod__mobile} className=' h-auto max-[1680px]:w-20 min-[1681px]:w-32 mt-6 ml-4' />
                  <p className='max-[1680px]:text-base min-[1681px]:text-lg mt-4'>CALL OF DUTY MOBILE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-gray-400 ${hour2 < 6 || hour2 >= 18 ? 'bg-opacity-40' : 'bg-opacity-10'} max-[1681px]:px-7 max-[1681px]:py-7 min-[1681px]:px-7 min-[1681px]:py-7 max-[1680px]:h-[400px] min-[1681px]:h-[470px] rounded-[30px] inline-block`}>
          <h1 className='text-center text-xl font-semibold max-[1680px]:mb-5 min-[1681px]:mb-7'>HOBBIES</h1>
          <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:mt-2 min-[1681px]:mt-3'>
            <div className='flex items-center'>
              <span className='max-[1680px]:text-lg min-[1681px]:text-xl'>Programming</span>
            </div>
          </div>
          <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:mt-2 min-[1681px]:mt-3'>
            <div className='flex items-center'>
              <span className='max-[1680px]:text-lg min-[1681px]:text-xl'>Badminton</span>
            </div>
          </div>
          <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:mt-2 min-[1681px]:mt-3'>
            <div className='flex items-center'>
              <span className='max-[1680px]:text-lg min-[1681px]:text-xl'>Gaming</span>
            </div>
          </div>
          <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:mt-2 min-[1681px]:mt-3'>
            <div className='flex items-center'>
              <span className='max-[1680px]:text-lg min-[1681px]:text-xl'>Listening Music</span>
            </div>
          </div>
          <div className='bg-white bg-opacity-70 rounded-xl max-[1680px]:px-6 max-[1680px]:py-3 min-[1681px]:px-8 min-[1681px]:py-4 text-black font-extrabold max-[1680px]:mt-2 min-[1681px]:mt-3'>
            <div className='flex items-center'>
              <span className='max-[1680px]:text-lg min-[1681px]:text-xl'>Watching Anime</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
