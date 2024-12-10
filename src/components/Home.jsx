import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'


const Home = () => {
  const btn = <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-black rounded-full shadow-md group">
    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">Start Now</span>
    <span class="relative invisible">Start Now</span>
  </a>
  return (
    <div >

      <div className='h-[650px] flex flex-col py-36 ' style={{ backgroundImage: 'url(images/livingroom1.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='bg-white text-black flex flex-col justify-center align-middle text-center py-4 w-[50%] self-center gap-3'>
          <span className='text-4xl font-serif'>Plan Your Perfect House </span>
          <span className='text-2xl font-normal '>Your Vision, Our Craftsmanship</span>
          <p className='font-light px-3'> Simplify your home renovation journey with a powerful planner designed to organize, track, and visualize every step of your project. Let’s turn your vision into reality!"</p>
        </div>
      </div>
   
    </div>


  )
}

export default Home

