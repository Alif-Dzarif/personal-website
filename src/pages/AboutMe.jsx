import React from 'react'
import me from '../assets/me/mefr.jpg'


export default function AboutMe({ textColor, hour2, aboutmeRef }) {
  return (
    <div ref={aboutmeRef} className={`h-screen w-screen max-lg:pt-24 max-lg:mb-20 max-lg:pb-5 lg:px-40 lg:pt-28 lg:pb-10 2xl:px-40 2xl:pt-32 2xl:pb-20 ${textColor}`} name="aboutme">
      <h1 className={`text-center max-lg:text-2xl lg:text-4xl 2xl:text-5xl font-bold`}>ABOUT ME</h1>
      <div className=' max-lg:mt-10 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center lg:flex lg:justify-center 2xl:grid 2xl:grid-cols-2 gap-0 w-full max-2xl:mt-20 2xl:mt-32 max-2xl:px-32'>
        <div className='row-span-1 flex justify-center lg:ml-8'>
          <div onClick={() => window.open('https://www.linkedin.com/in/la-ode-abdul-dzarif-2b7060287/')} className='max-lg:mb-10 max-lg:h-40 max-lg:w-40 lg:h-52 lg:w-52 2xl:h-60 2xl:w-60 overflow-hidden rounded-full inline-block border-2 border-white hover:cursor-pointer outline outline-yellow-500 outline-4'>
            <img src={me} className='mb-20 z-[-1] contrast-150 hover:sepia' />
          </div>
        </div>
        <div className='max:lg:flex max-lg:justify-center max-lg:text-base max-lg:mr-32 md:m-0  lg:ml-40 lg:text-lg 2xl:text-xl font-semibold w-full row-span-1'>
          <p className='max-lg:w-[300px] max-2xl:w-[500px] 2xl:w-[600px] max-lg:leading-6 leading-10 text-justify'>
            I graduated from Vocational High School, where I learned about <span className='underline'>Mikrotik, Networking and Computer Hardware, and a little bit about IoT</span>.
            I have skills in various web technologies, such as <span className='underline'>React Js, Vue Js, Redux, Pinia, JS, HTML and CSS, Tailwind CSS, and Apollo Client</span> for the front end,
            and <span className='underline'>Node Js, Express, GraphQL, Postgres, Sequelize, MVC pattern, and Apollo Server</span> for the back end.
            I enjoy working on challenging projects that require creativity and problem-solving skills. I’m always eager to improve my knowledge and expand my horizons.
          </p>
        </div>
      </div>
    </div>
  )
}
