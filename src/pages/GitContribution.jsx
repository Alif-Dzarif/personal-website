import React from 'react'

export default function GitContribution({ textColor, contributionRef }) {
  return (
    <div ref={contributionRef} className='h-screen w-screen max-[1680px]:py-28 max-[1680px]:px-40 min-[1681px]:px-40 min-[1681px]:pt-32 pb-20' name='contribution'>
      <h1 className={`text-center max-[1680px]:text-4xl min-[1681px]:text-5xl font-bold ${textColor}`}>GITHUB CONTRIBUTION</h1>
      <div className='max-[1680px]:px-40 min-[1681px]:px-52 mt-24'>
        <h1 className={`max-[1680px]:text-xl min-[1681px]:text-2xl font-semibold ${textColor}`}>Github Username : Alif-Dzarif</h1>
      </div>
      <div className='w-full flex justify-center max-[1680px]:mt-5 min-[1681px]:mt-10'>
        <img src="https://ghchart.rshah.org/fe2f2f/alif-dzarif" alt="Alif-Dzarif Github chart" className='max-[1680px]:h-40 min-[1681px]:h-56 w-3/4 cursor-pointer' onClick={() => window.open('https://github.com/alif-dzarif')} />
      </div>
    </div>
  )
}
