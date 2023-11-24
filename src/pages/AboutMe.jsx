import React from 'react'
import me from '../assets/me/mefr.jpg'


export default function AboutMe({ textColor, hour2, aboutmeRef }) {
  return (
    <div ref={aboutmeRef} className={`h-screen w-screen 
      max-[1000px]:pt-[100px] max-[1000px]:pb-20 max-[1000px]:mb-44
      max-[1680px]:pt-24 max-[1680px]:mb-20 max-[1680px]:pb-5
      min-[1681px]:px-40 min-[1681px]:pt-32 min-[1681px]:pb-20 ${textColor}`} name="aboutme">
      <h1 className={`text-center max-[1000px]:text-2xl max-[1680px]:text-4xl min-[1681px]:text-5xl font-bold`}>ABOUT ME</h1>
      <div className=' max-[1000px]:mt-10 max-[1680px]:mt-20 lg:flex max-[1680px]:mr-20 lg:justify-center min-[1681px]:grid min-[1681px]:grid-cols-2 gap-0 w-full min-[1681px]:mt-32'>
        <div className=' max-[1680px]:flex max-[1680px]:justify-center row-span-1 w-full flex justify-center'>
          <div onClick={() => window.open('https://www.linkedin.com/in/la-ode-abdul-dzarif-2b7060287/')} className='max-[1000px]:w-36 max-[1000px]:h-36 max-[1000px]:ml-0 max-[1680px]:ml-36 max-[1680px]:mb-10 max-[1680px]:h-40 max-[1680px]:w-40 min-[1681px]:h-60 min-[1681px]:w-60 overflow-hidden rounded-full inline-block border-2 border-white hover:cursor-pointer outline outline-yellow-500 outline-4'>
            <img src={me} className='mb-20 z-[-1] contrast-150 hover:sepia' />
          </div>
        </div>
        <div className='max-[1680px]:flex max-[1000px]:text-sm max-[1000px]:font-normal max-[1680px]:justify-center max-[1680px]:text-base md:m-0 lg:text-lg min-[1681px]:text-xl font-semibold w-full row-span-1'>
          <p className='max-[1000px]:w-[300px] max-[1680px]:w-[400px] max-[1681px]:w-[500px] max-[1000px]:leading-[23px] min-[1681px]:w-[600px] max-[1680px]:leading-6 leading-10 text-justify'>
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