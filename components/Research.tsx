import { researchPublications } from '@/lib/constants/research'
import { Research } from '@/lib/types'
import React from 'react'


function ResearchPage() {
  return (
    <div id='research' >
    <h1 className='text-3xl md:text-4xl xl:text-5xl mb-10 mx-auto text-center font-bold text-gray-800'>Research</h1>
    <div className="lg:mt-6 flex items-start flex-col gap-5 p-3 max-h-lvh overflow-y-auto mb-5">
        {researchPublications.map((r,i)=><SingleRessearch key={i} {...r}/>)}
    </div>
    </div>
  )
}

export default ResearchPage

const SingleRessearch=({title,authors,impactFactor,year}:Research)=>{
    return (
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-xl font-semibold text-gray-500">{title}</h1>
        <div className="flex items-center gap-2 text-gray-400">
          <h3 className=" text-sm font-semibold mr-2 uppercase text-gray-400">
            Authors:
          </h3>
          {authors.map((a, i) => (
            <div className="flex items-center gap-1 mx-3" key={i}>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <p className="font-medium">{a}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          {impactFactor && (
            <h3 className=" text-sm font-semibold mr-2 uppercase text-gray-400">
              Impact Factor
            </h3>
          )}
          {impactFactor && <p className="font-medium">{impactFactor}</p>}
        </div>
        <div className="flex items-center gap-2 text-gray-400">
            <h3 className=" text-sm font-semibold mr-2 uppercase text-gray-400">
              Published In:
            </h3>
          <p className="font-medium">{year}</p>
        </div>
      </div>
    );
}