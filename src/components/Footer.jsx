import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex flex-col px-20 pt-20 border pb-10 bg-zinc-300 gap-5'>
            <div className='flex flex-col gap-3'>
                <p className='text-4xl self-center font-medium font-serif'>Transform Your Home Today!</p>
                <p className='text-lg font-medium self-center'>Ready to bring your vision to life?</p>
                <p className='self-center'>Contact us to start your home renovation journey!</p>
            </div>
            <div className='flex justify-around border-y border-y-black py-5'>
                {/* qquick links */}
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl font-semibold'>Quick Links</h3>
                    <ul className='list-disc px-5 font-light'>
                        <li><NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-black"
                        }>Home</NavLink>
                        
                        </li>
                        <li><NavLink to="/time" className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-black"
                        }>Project Timeline</NavLink></li>
                        <li><NavLink to="/collaborate" className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-black"
                        }>Collaborate</NavLink>
                        </li>
                        <li><NavLink to="/budget" className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold" : "text-black"
                        }>Budget Tracker</NavLink>
                        </li>
                    </ul>
                </div>
                {/* get in touch */}
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>Get in Touch</h3>
                    <p><span className='font-semibold'>Address : </span> 123 Rennovation lane, Dream City, Country </p>
                    <p><span className='font-semibold'> Phone:</span>+91 1754754253</p>
                    <p><span className='font-semibold'>Email : </span>support@renovateyourhome.com</p>
                    <div >
                        <ul className='list-disc px-5 font-light'>
                            <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                            <li>Sat: 10:00 AM – 4:00 PM</li>
                            <li>Sun: Closed</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div>
            </div>
            <div className='self-center text-center font-light '>
                <p>© 2024 Renovate Your Home. All rights reserved.</p>
                <p> "Building better spaces for a better you."</p>
            </div>
        </div>
    )
}

export default Footer