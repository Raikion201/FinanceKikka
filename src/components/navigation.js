import React from 'react'
import Logo from '../utilities/logo'


const Navigation = () => (
  <div className='flex h-12 md:pt-16 w-full items-center px-4 space-x-12 '>
      <div className='flex items-center '>
      <div className='hidden md:block md:w-8'></div>
        <Logo/>
        <div className='pl-2 md:pl-2 text-white font-bold text-sm md:text-lg inline-block'>Kinka<br/>Finance</div>
      </div>
      <div className='flex-1'></div>
      <a href="#service" className='text-sm h-full flex items-center text-gray-300' >Services</a>
      <a href="#calculator" className='text-sm h-full flex items-center text-gray-300'>Calculator</a>
      <div className='hidden md:block md:w-4'></div>
  </div>
)

export default Navigation
