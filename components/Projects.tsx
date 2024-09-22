import { projects } from '@/lib/constants/projects'
import { Project } from '@/lib/types'
import Image from 'next/image'
import React from 'react'


function Projects() {
  return (
    <div id='projects'>
        <h1 className='text-3xl md:text-4xl xl:text-5xl mb-10 mx-auto text-center font-bold text-gray-800'>Projects</h1>
        <div className="lg:mt-6 flex items-start flex-col gap-5 p-3">
          {projects.map((p,i)=><SingleProject key={i} {...p}/>)}
        </div>
    </div>
  )
}

export default Projects

const SingleProject = ({image,title,description}:Project) =>{
    return (
      <>
      <div className="flex items-start flex-col md:flex-row gap-y-3 justify-between w-full">
        <div className="flex flex-col items-start gap-3">
          <h1 className='text-xl sm:text-2xl  mb-3 font-semibold text-gray-600'>{title}</h1>
          <p className='md:text-xl text-lg text-gray-500 max-w-xl'>
            {description}
          </p>
        </div>
          <Image width={300} height={300}
            src={image as string}
            alt={title as string}
            className='w-full md:w-56 h-56  rounded-sm shadow-sm object-cover'
            />

      </div>
      <hr className="h-px my-2 w-full bg-gray-200 border-0 dark:bg-gray-700"/>
      </>
    )
}