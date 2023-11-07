import { scroller } from 'react-scroll'
import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollProgress from 'scrollprogress'

import { faAnglesUp, faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import ProjectCarousel from './components/ProjectCarousel'


function App() {
  const [bgTime, setBgTime] = useState('')
  const [textColor, setTextColor] = useState('text-black')
  const [buttonBorder, setButtonBorder] = useState('border-white')
  const [hour2, setHour2] = useState(new Date().getHours())
  const [pages, setPages] = useState(1)
  const [pageSlide, setPageSlide] = useState('-translate-y-[0rem]')

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

  // const progressObserver = new ScrollProgress((x, y) => {
  //   console.log(Math.floor(y * 100), '%');
  // })

  const timer = () => {
    try {
      let hour = new Date().getHours();
      setHour2(new Date().getHours());

      if (hour < 4 || hour >= 19) night();
      else if (hour < 6) morning();
      else if (hour < 16) day()
      else if (hour < 18) afternoon()
      else evening()
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    setAnime('animate-slide-right')
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
    if (newPages < 3) {
      newPages += 1;
      setPages(newPages);
    }
  }

  useEffect(() => {
    if (pages === 1) {
      setPageSlide('-translate-y-[0rem]')
      scroller.scrollTo('intro', {
        smooth: true,
        duration: 800
      })
    }
    else if (pages === 2) {
      setPageSlide('-translate-y-[6.45rem]')
      scroller.scrollTo('project', {
        smooth: true,
        duration: 800
      })
    }
    else if (pages === 3) {
      setPageSlide('-translate-y-[12.9rem]')
      scroller.scrollTo('contact', {
        smooth: true,
        duration: 800
      })
    }
  }, [pages])

  useEffect(() => {
    const intervalHour = setInterval(timer, 1000);
    return () => clearInterval(intervalHour);
  }, []);

  return (
    <div className={`w-full h-full ${bgTime} bg-fixed ${textColor} theme overflow-hidden`}>
      <div className="fixed h-[120px] py-10 px-20 top-0 left-0 right-0 bg-white bg-opacity-[0.001]">
        <button className={`button button-fill border-2 ${buttonBorder} 
            ${hour2 < 6 || hour2 >= 18 ? 'before:bg-white' : 'before:bg-black'} 
            ${hour2 < 6 || hour2 >= 18 ? 'hover:text-black' : 'hover:text-white'} 
            font-bold h-14`}
          onClick={() => pages === 0 ? null : setPages(1)}
        >
          INTRO
        </button>
      </div>
      <aside className={`fixed top-[30%] right-0 z-[99] w-14 h-48 rounded-l-xl border-2 border-r-0 overflow-hidden inline-block ${buttonBorder}`}>
        <div className='z-[3] flex items-center flex-col h-36 justify-between py-3'>
          <div onClick={clickPrev} className={`cursor-pointer w-10 h-10 ${pages === 1 ? 'text-slate-600' : ''}`}>
            <FontAwesomeIcon icon={faAnglesUp} size='2xl' className='' />
          </div>
          <div onClick={clickNext} className={`cursor-pointer w-10 h-10 ${pages === 3 ? 'text-slate-600' : ''}`}>
            <FontAwesomeIcon icon={faAnglesDown} size='2xl' className='' />
          </div>
        </div>
        <div className='z-[-1] h-32 overflow-visible absolute leading-4 flex items-center flex-col w-full select-none top-0'>
          <ul className={`text-2xl font-bold absolute left-2 ${pageSlide} side__pages`}>
            <li className='h-20 my-6 flex items-center'>01</li>
            <li className='h-20 my-6 flex items-center'>02</li>
            <li className='h-20 my-6 flex items-center'>03</li>
          </ul>
        </div>
      </aside>
      <div className='h-screen py-44 px-16 flex justify-center border-b-2 border-white select-none' name='intro'>
        <div className='mt-36'>
          <h1 className=' text-6xl flex font-bold '>Hello <span className='mr-3 ml-3'><a href="https://emoji.gg/emoji/2084-heya"><img src="https://cdn3.emoji.gg/emojis/2084-heya.gif" width="50px" height="50px" alt="heya" /></a></span> I'm La Ode Abdul Dzarif Imaduddin</h1>
          <h1 className='text-3xl mt-5 font-medium'>I'm a
            <span className='ml-3'>
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
        </div>
      </div>
      <ProjectCarousel />
      <div className='h-screen' name='contact'>
        <h1 onClick={() => handleClick()}>
          Hello World 3
        </h1>
      </div>
    </div>
  )
}

export default App
