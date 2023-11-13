import React from 'react'

export default function GitContribution({ textColor }) {
  return (
    <div className='h-screen w-screen px-40 pt-32 pb-20' name='contribution'>
      <h1 className={`text-center text-5xl font-bold ${textColor}`}>GITHUB CONTRIBUTION</h1>
      <div className='px-52 mt-24'>
        <h1 className={`text-2xl font-semibold ${textColor}`}>Github Username : Alif-Dzarif</h1>
      </div>
      <div className='w-full flex justify-center mt-10'>
        <img src="https://ghchart.rshah.org/fe2f2f/alif-dzarif" alt="Alif-Dzarif Github chart" className='h-56 w-3/4 cursor-pointer' onClick={() => window.open('https://github.com/alif-dzarif')} />
      </div>
    </div>
  )
}
