import React from 'react'
import me from '../assets/me/mefr.jpg'


export default function AboutMe({ textColor, hour2, aboutmeRef }) {
  return (
    <div ref={aboutmeRef} className={`h-screen w-screen px-40 pt-32 pb-20 ${textColor}`} name="aboutme">
      <h1 className={`text-center text-5xl font-bold`}>ABOUT ME</h1>
      <div className='grid grid-cols-2 w-full mt-32'>
        <div className='row-span-1 flex justify-center'>
          <div onClick={() => window.open('https://www.linkedin.com/in/la-ode-abdul-dzarif-2b7060287/')} className='h-60 w-60 overflow-hidden rounded-full inline-block border-2 border-white hover:cursor-pointer outline outline-yellow-500 outline-4'>
            <img src={me} className='mb-20 z-[-1] contrast-150 hover:sepia' />
          </div>
        </div>
        <div className='text-xl font-semibold w-full row-span-1'>
          <p className='w-[600px] leading-10 text-justify'>
            I graduated from Vocational High School, where I learned about Mikrotik, Networking and Computer Hardware, and a little bit about IoT.
            I have skills in various web technologies, such as React Js, Vue Js, Redux, Pinia, JS, HTML and CSS, Tailwind CSS, and Apollo Client for the front end,
            and Node Js, Express, GraphQL, Postgres, Sequelize, MVC pattern, and Apollo Server for the back end.
            I enjoy working on challenging projects that require creativity and problem-solving skills. I’m always eager to improve my knowledge and expand my horizons.
          </p>
        </div>
      </div>
    </div>
  )
}
