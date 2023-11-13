import React from 'react'

export default function AboutMe({ textColor }) {
  return (
    <div className='h-screen w-screen px-40 pt-32 pb-20' name="aboutme">
      <h1 className={`text-center text-5xl font-bold ${textColor}`}>ABOUT ME</h1>
    </div>
  )
}
