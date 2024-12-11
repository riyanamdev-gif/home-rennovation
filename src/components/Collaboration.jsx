
import React, { useState } from 'react'

const Collaboration = () => {
    const [message, setMessage] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const handleMessage = () => {
        if (inputValue.trim()) {
            setMessage([...message, { text: inputValue, sender: 'You' }])
            setInputValue("");
        }
    };



    let sendbutton = <a href="#_" className="relative inline-block text-lg group">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <button className="relative" >Send</button>
        </span>
        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>

    return (
        <div className='flex lg:px-20 lg:py-10 md:px-10 md:py-10 px-5 py-5 gap-10 w-full  bg-fuchsia-100 '>
            <div className=' w-full  flex px-4 py-4 gap-5  flex-col md:flex-col lg:flex-col'>
                <header className='text-4xl font-semibold '>Chat</header>
                <div className=' bg-white mb-5 rounded-lg h-64 p-2 overflow-y-auto shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)]'>
                    {message.map((message, index) => (
                        <div className='flex gap-3 items-center lg:px-4 lg:py-2 md:px-4 md:py-2 '>
                            <div key={index} className="px-4 h-10 py-2 text-center bg-zinc-300 text-black rounded-full">
                                <span className='text-center'>{message.sender[0]}</span>
                            </div>

                            <div className='flex flex-col  '>
                                <p className='text-lg font-medium'>{message.sender}</p>
                               
                                <p className='text-gray-700'>{message.text}</p>
                            </div>
                        </div>


                    ))}

                </div>

                <div className='flex flex-col gap-5 lg:flex-row lg:gap-10  md:flex-row md:gap-10  '>
                    <input type='text' placeholder="Enter your message...."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className='border-2 rounded-md px-4 py-2 sm:w-[80%] flex-grow self-center h-full' />
                    <button onClick={handleMessage}>{sendbutton}</button>
                </div>
            </div>
    
        </div>
    )
}

export default Collaboration