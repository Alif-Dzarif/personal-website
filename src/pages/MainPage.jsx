import React from 'react'
import { scroller } from 'react-scroll'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp, faAnglesDown, faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import ProjectCarousel from './ProjectCarousel'
import GetInTouch from './GetInTouch'
import GitContribution from './GitContribution'
import AboutMe from './AboutMe'
import Intro from './Intro'


export default function MainPage() {
  const navigate = useNavigate()

  const [bgTime, setBgTime] = useState('')
  const [textColor, setTextColor] = useState('text-black')
  const [buttonBorder, setButtonBorder] = useState('border-white')
  const [hour2, setHour2] = useState(new Date().getHours())
  const [pages, setPages] = useState(1)
  const [pageSlide, setPageSlide] = useState('-translate-y-[0rem]')
  const [menuClick, setMenuClick] = useState(true)


  const { ref: introRef, inView: introView } = useInView({ threshold: 0.5 });
  const { ref: aboutmeRef, inView: aboutmeView } = useInView({ threshold: 0.5 });
  const { ref: projectRef, inView: projectView } = useInView({ threshold: 0.5 });
  const { ref: contributionRef, inView: contributionView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (introView) setPages(1);
    if (aboutmeView) setPages(2);
    if (projectView) setPages(3);
    if (contributionView) setPages(4);
    if (contactView) setPages(5);
  }, [introView, aboutmeView, projectView, contributionView, contactView]);



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

  const clickPrev = () => {
    let newPages = pages;
    if (newPages > 1) {
      newPages -= 1;
      setPages(newPages);
    }
  }

  const clickNext = () => {
    let newPages = pages;
    if (newPages < 5) {
      newPages += 1;
      setPages(newPages);
    }
  }

  const menu = () => {
    if (menuClick) setMenuClick(false)
    else setMenuClick(true)
  }

  useEffect(() => {
    if (pages === 1) {
      setPageSlide('-translate-y-[0rem]')
      scroller.scrollTo('intro', {
        smooth: true,
        duration: 500
      })
    }
    else if (pages === 2) {
      setPageSlide('-translate-y-[6.45rem]')
      scroller.scrollTo('aboutme', {
        smooth: true,
        duration: 500
      })
    }
    else if (pages === 3) {
      setPageSlide('-translate-y-[12.9rem]')
      scroller.scrollTo('project', {
        smooth: true,
        duration: 500
      })
    }
    else if (pages === 4) {
      setPageSlide('-translate-y-[19.35rem]')
      scroller.scrollTo('contribution', {
        smooth: true,
        duration: 500
      })
    }
    else if (pages === 5) {
      setPageSlide('-translate-y-[25.8rem]')
      scroller.scrollTo('contact', {
        smooth: true,
        duration: 500
      })
    }
  }, [pages])

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
      x: '-100vw',
      transition: { ease: "easeInOut" }
    }
  }

  return (
    <motion.div className={`back-body w-full h-full ${bgTime} bg-fixed ${textColor} theme overflow-hidden transition-colors font-mono`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between fixed h-[120px] top-0 left-0 right-0 bg-white bg-opacity-[0.001]
        2xl:py-10 2xl:px-20
        max-2xl:px-10 max-2xl:py-7 
        max-md:px-5 max-md:py-7 
      ">
        <button onClick={() => pages > 1 ? window.scrollTo(0, 0) : setPages(pages)} className={`relative cursor-pointer bg-transparent button button-fill border-2 font-bold font-mono
          2xl:m-[10px] 2xl:min-w-[180px] 2xl:py-2 2xl:px-4 2xl:text-lg 2xl:h-14
          max-2xl:m-[5px] max-2xl:min-w-[140px] max-2xl:py-1 max-2xl:px-2 max-2xl:text-base max-2xl:h-12
          max-md:m-[5px] max-md:min-w-[90px] max-md:py-[2px] max-md:px-1 max-md:text-base max-md:h-11
          ${buttonBorder} ${hour2 < 6 || hour2 >= 18 ? 'before:bg-white' : 'before:bg-black'} ${hour2 < 6 || hour2 >= 18 ? 'hover:text-black' : 'hover:text-white'}
        `}>
          INTRO
        </button>
        <div className='flex font-bold max-2xl:texl-lg 2xl:text-xl max-2xl:mt-2 2xl:mt-4'>
          <div className={`max-md:w-20 2xl:w-18 overflow-hidden h-20`}>
            <button onClick={() => navigate('/general')} className={`${menuClick ? 'translate-x-40' : 'translate-x-0'} hover:text-yellow-400 transition-transform mr-10 leading-[50px] z-20`}>GENERAL</button>
          </div>
          <div className={`max-md:w-20 2xl:w-18 overflow-hidden h-20`}>
            <button onClick={() => navigate('/projects')} className={`${menuClick ? 'translate-x-40' : 'translate-x-0'} hover:text-yellow-400 transition-transform mr-10 leading-[50px] z-20`}>PROJECTS</button>
          </div>
          <div onClick={menu} className='w-10 cursor-pointer -leading-5 z-30'>
            <FontAwesomeIcon icon={faSquareCaretLeft} className={`max-2xl:w-11 max-2xl:h-11 2xl:w-12 2xl:h-12 ${menuClick ? 'text-yellow-400' : 'text-white'} transition-colors drop-shadow-xl`} />
          </div>
        </div>
      </div>
      <aside className={`max-lg:hidden visible fixed border-4 border-r-0 bg-slate-600 right-0 z-[99]] overflow-hidden inline-block ${buttonBorder} shadow-sm shadow-white
        2xl:top-[27%] 2xl:w-14 2xl:h-64 2xl:rounded-l-xl
        max-2xl:top-[27%] max-2xl:w-12 max-2xl:h-60 max-2xl:rounded-l-lg
      `}>
        <div className='z-[3] flex items-center flex-col h-36 justify-between max-2xl:px-1 py-3'>
          <div onClick={clickPrev} className={`cursor-pointer w-10 h-10 ${pages === 1 ? 'text-gray-400' : 'text-yellow-400'}`}>
            <FontAwesomeIcon icon={faAnglesUp} size='2xl' className='' />
          </div>
          <div onClick={clickNext} className={`cursor-pointer w-10 h-10 ${pages === 5 ? 'text-gray-400' : 'text-yellow-400'} `}>
            <FontAwesomeIcon icon={faAnglesDown} size='2xl' className='' />
          </div>
        </div>
        <div className='z-[-1] h-52 overflow-visible absolute 2xl:left-0 max-2xl:left-[-4px] leading-4 flex items-center flex-col w-full select-none top-0'>
          <ul className={`text-2xl absolute left-2 ${pageSlide} side__pages`}>
            <li className={`h-20 my-6 flex items-center ${pages === 1 ? 'text-yellow-300' : 'text-white'}`}>01</li>
            <li className={`h-20 my-6 flex items-center ${pages === 2 ? 'text-yellow-300' : 'text-white'}`}>02</li>
            <li className={`h-20 my-6 flex items-center ${pages === 3 ? 'text-yellow-300' : 'text-white'}`}>03</li>
            <li className={`h-20 my-6 flex items-center ${pages === 4 ? 'text-yellow-300' : 'text-white'}`}>04</li>
            <li className={`h-20 my-6 flex items-center ${pages === 5 ? 'text-yellow-300' : 'text-white'}`}>05</li>
          </ul>
        </div>
      </aside>
      <div className={`top-0 bottom-0 h-2 bg-black w-full`}></div>
      <Intro introRef={introRef} hour2={hour2} textColor={textColor} />
      <AboutMe aboutmeRef={aboutmeRef} hour2={hour2} textColor={textColor} />
      <ProjectCarousel projectRef={projectRef} hour2={hour2} textColor={textColor} className="slide-down" />
      <GitContribution contributionRef={contributionRef} hour2={hour2} textColor={textColor} />
      <GetInTouch contactRef={contactRef} hour2={hour2} />
    </motion.div>
  )
}
