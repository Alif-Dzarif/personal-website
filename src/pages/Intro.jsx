import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typewriter } from 'react-simple-typewriter'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

import CV from '../assets/documents/La Ode Abdul Dzarif Imaduddin CV (10).pdf'


export default function Intro({ intro, hour2, textColor, introRef }) {
  return (
    <div ref={introRef} className='slide-down h-screen max-md:pb-72 max-md:px-20 max-2xl:py-44 max-2xl:px-24 2xl:py-44 2xl:px-16 flex justify-center select-none' name='intro' >
      <div className='max-md:mt-16 mt-36'>
        <h1 className='max-md:hidden max-2xl:text-4xl 2xl:text-6xl flex font-bold '>Hello <span className='mr-3 ml-3'><a href="https://emoji.gg/emoji/2084-heya"><img src="https://cdn3.emoji.gg/emojis/2084-heya.gif" className='max-2xl:w-10 max-2xl:h-10 2xl:w-12 2xl:h-12' alt="heya" /></a></span> I'm <span className='max-2xl:ml-2 2xl:ml-5 txt-outline'>La Ode Abdul Dzarif Imaduddin</span></h1>
        <h1 className='sm:hidden text-2xl flex font-bold '>Hello <span className='mr-3 ml-3'><a href="https://emoji.gg/emoji/2084-heya"><img src="https://cdn3.emoji.gg/emojis/2084-heya.gif" className='w-7 h-7' alt="heya" /></a></span>I'm</h1>
        <h1 className='sm:hidden text-3xl font-bold'><span className='txt-outline'>La Ode Abdul Dzarif Imaduddin</span></h1>
        <h1 className='max-md:text-base max-2xl:text-xl 2xl:text-3xl max-2xl:mt-2 2xl:mt-5 font-semibold'>I'm a
          <span className='ml-3 text-purple-700 txt-outline'>
            <Typewriter
              words={['Software Developer', 'Mobile Developer', 'FullStack Developer']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </span>
        </h1>
        <div className=' max-2xl:mt-2 2xl:mt-5'>
          <a href={CV} download="La Ode Abdul Dzarif Imaduddin CV" className='text-lg font-semibold font-mono'>
            <button type="button" className='bg-yellow-400 active:bg-yellow-600 max-2xl:px-3 max-2xl:py-1 2xl:px-5 2xl:py-2 max-2xl:text-base rounded-full shadow-2xl active:shadow-none text-black'>Download CV <span className='max-2xl:ml-1 2xl:ml-2'><FontAwesomeIcon icon={faFileArrowDown} className='max-2xl::w-4 max-2xl:h-5 2xl:w-5 2xl:h-6' /></span> </button>
          </a>
        </div>
      </div>
    </div>
  )
}
