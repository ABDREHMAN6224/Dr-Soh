import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Intro() {
  return (
    <div className='w-full h-screen flex items-center pt-4 md:pt-0 justify-center space-x-4 gap-4 flex-col space-y-4 md:flex-row'>
        <Image src='/assets/images/sir_1.jpg' alt='Dr sohail' width={500} height={500} 
            className='rounded-full filter w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96' 
        />
        <div className="flex flex-col items-start gap-3">
            <h1 className='text-3xl md:text-4xl lg:text-5xl mb-3 font-bold text-gray-800'>Welcome</h1>
            <h3 className='text-lg md:text-xl  font-semibold text-gray-600 capitalize'>A bit about me</h3>
            <p className='text-sm md:text-base lg:text-lg text-gray-500 max-w-xl'>
            I hold a Ph.D. in Computer Science from the University of Paris-Est and an M.Phil. in Computational Mathematics from Quaid-e-Azam University. I’ve led the IT and Computer Science departments at NUST-SEECS (2014-2022) and currently direct the High-Performance Computing Lab, focusing on AI, Machine Learning, and robotics research.</p>
        <div className="flex items-center gap-3">
            <a href={"/assets/resume.pdf"} download={true} className=" h-10 px-4 rounded-md font-semibold sm:text-lg md:text-xl border border-gray-800 p-3 items-center flex justify-center text-yellow-500  hover:bg-yellow-500 hover:text-white transition-all cursor-pointer">Resume</a>
            <Link href={"#projects"} className=" h-10 px-4 rounded-md font-semibold sm:text-lg md:text-xl border border-gray-800 p-3 items-center flex justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer">Projects</Link>
            <Link href={"#contact"} className=" h-10 px-4 rounded-md font-semibold sm:text-lg md:text-xl border border-gray-800 p-3 items-center flex justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all cursor-pointer">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Intro