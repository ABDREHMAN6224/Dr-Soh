import Contact from '@/components/Contact'
import Courses from '@/components/Courses'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import React from 'react'

type Props = {}

function Home({}: Props) {
  return (
    <div className='mx-auto max-w-7xl'>
    <Intro />
    <Projects/>
    <Research/>
    <Courses/>
    <Contact/>
    </div>
  )
}

export default Home