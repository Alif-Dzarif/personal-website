import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typewriter } from 'react-simple-typewriter'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

import CV from '../assets/documents/La Ode Abdul Dzarif Imaduddin CV (10).pdf'


export default function Intro({ intro, hour2, textColor, introRef }) {
  return (
    <div ref={introRef} className='slide-down  h-screen py-44 px-16 flex justify-center select-none' name='intro' >
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
              delaySpeed={2000}
            />
          </span>
        </h1>
        <div className='mt-5'>
          <a href={CV} download="La Ode Abdul Dzarif Imaduddin CV" className='text-lg font-semibold font-mono'>
            <button type="button" className='bg-yellow-400 active:bg-yellow-600 px-5 py-2 rounded-full shadow-2xl active:shadow-none text-black'>Download CV <span className='ml-2'><FontAwesomeIcon icon={faFileArrowDown} size='lg' /></span> </button>
          </a>
        </div>
      </div>
    </div>
  )
}
