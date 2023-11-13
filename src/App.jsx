import { scroller } from 'react-scroll'
import { useEffect, useState, useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAnglesUp, faAnglesDown , faFileArrowDown} from '@fortawesome/free-solid-svg-icons'

import ProjectCarousel from './components/ProjectCarousel'
import GetInTouch from './components/GetInTouch'
import GitContribution from './components/GitContribution'
import AboutMe from './components/AboutMe'

import CV from './assets/documents/La Ode Abdul Dzarif Imaduddin CV (10).pdf'


function App() {
  const [bgTime, setBgTime] = useState('')
  const [textColor, setTextColor] = useState('text-black')
  const [buttonBorder, setButtonBorder] = useState('border-white')
  const [hour2, setHour2] = useState(new Date().getHours())
  const [pages, setPages] = useState(1)
  const [pageSlide, setPageSlide] = useState('-translate-y-[0rem]')
  const containerRef = useRef(null);


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

  return (
    <div className={`back-body w-full h-full ${bgTime} bg-fixed ${textColor} theme overflow-hidden transition-colors font-mono`}>
      <div className="fixed h-[120px] py-10 px-20 top-0 left-0 right-0 bg-white bg-opacity-[0.001]">
        <button className={`button button-fill border-2 ${buttonBorder} 
            ${hour2 < 6 || hour2 >= 18 ? 'before:bg-white' : 'before:bg-black'} 
            ${hour2 < 6 || hour2 >= 18 ? 'hover:text-black' : 'hover:text-white'} 
            font-bold font-mono text-lg h-14`}
          onClick={() => pages === 0 ? null : setPages(1)}
        >
          INTRO
        </button>
      </div>
      <aside className={`fixed top-[30%] right-0 z-[99] w-16 h-52 rounded-l-xl border-4 bg-slate-600 border-r-0 overflow-hidden inline-block ${buttonBorder} shadow-sm shadow-white`}>
        <div className='z-[3] flex items-center flex-col h-36 justify-between py-3'>
          <div onClick={clickPrev} className={`cursor-pointer w-10 h-10 ${pages === 1 ? 'text-slate-500' : 'text-yellow-400'}`}>
            <FontAwesomeIcon icon={faAnglesUp} size='2xl' className='' />
          </div>
          <div onClick={clickNext} className={`cursor-pointer w-10 h-10 ${pages === 5 ? 'text-slate-500' : 'text-yellow-400'} `}>
            <FontAwesomeIcon icon={faAnglesDown} size='2xl' className='' />
          </div>
        </div>
        <div className='z-[-1] h-40 overflow-visible absolute left-1 leading-4 flex items-center flex-col w-full select-none top-0'>
          <ul className={`text-2xl absolute left-2 ${pageSlide} side__pages`}>
            <li className={`h-20 my-6 flex items-center ${pages === 1 ? 'text-yellow-300' : ''}`}>01</li>
            <li className={`h-20 my-6 flex items-center ${pages === 2 ? 'text-yellow-300' : ''}`}>02</li>
            <li className={`h-20 my-6 flex items-center ${pages === 3 ? 'text-yellow-300' : ''}`}>03</li>
            <li className={`h-20 my-6 flex items-center ${pages === 4 ? 'text-yellow-300' : ''}`}>04</li>
            <li className={`h-20 my-6 flex items-center ${pages === 5 ? 'text-yellow-300' : ''}`}>05</li>
          </ul>
        </div>
      </aside>
      <div className={`top-0 bottom-0 h-2 bg-black w-[]`}></div>
      <div className='slide-down  h-screen py-44 px-16 flex justify-center select-none' name='intro' >
        <div className='mt-36'>
          <h1 className=' text-6xl flex font-bold '>Hello <span className='mr-3 ml-3'><a href="https://emoji.gg/emoji/2084-heya"><img src="https://cdn3.emoji.gg/emojis/2084-heya.gif" width="50px" height="50px" alt="heya" /></a></span> I'm <span className='ml-5 txt-outline'>La Ode Abdul Dzarif Imaduddin</span></h1>
          <h1 className='text-3xl mt-5 font-semibold'>I'm a
            <span className='ml-3 text-purple-700 txt-outline'>
              <Typewriter
                words={['Software Developer', 'Mobile Developer', 'FullStack Developer']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className='mt-5'>
            <a href={CV} download="La Ode Abdul Dzarif Imaduddin CV" className='text-lg font-semibold font-mono'>
              <button type="button" className='bg-yellow-400 active:bg-yellow-600 px-5 py-2 rounded-full shadow-2xl active:shadow-none'>Download CV <span className='ml-2'><FontAwesomeIcon icon={faFileArrowDown} size='lg'/></span> </button>
            </a>
          </div>
        </div>
      </div>
      <AboutMe textColor={textColor} />
      <ProjectCarousel textColor={textColor} className="slide-down" />
      <GitContribution textColor={textColor} />
      <GetInTouch />
    </div>
  )
}

export default App
