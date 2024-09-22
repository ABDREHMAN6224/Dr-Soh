import { coursesTaught } from '@/lib/constants/courses';
import React from 'react'

type Props = {}
const colors: string[] = [
    "#DC143C", // Crimson
    "#40E0D0", // Turquoise
    "#DAA520", // Goldenrod
    "#EE82EE", // Violet
    "#FF7F50", // Coral
    "#7FFF00", // Chartreuse
    "#DA70D6", // Orchid
    "#FF6347", // Tomato
    "#7DF9FF", 
    "#FF00FF"  
  ];

function Courses({}: Props) {
  return (
    <div id='teaching' className='mb-10'>
        <h1 className='text-3xl md:text-4xl xl:text-5xl mb-10 mx-auto text-center font-bold text-gray-800 mt-10'>Teaching</h1>
        <div className="lg:mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-3">
            {coursesTaught.map(({title},i)=>{
                return <div key={i} className='flex items-center gap-2 text-gray-500 font-semibold p-2 rounded-sm shadow-sm bg-white'>
                    <div className="w-3 h-3 rounded-full"
                        style={{
                            background:colors[i]
                        }}
                    ></div>
                    <p>{title}</p>
                </div>
            })}
        </div>
        </div>
  )
}

export default Courses