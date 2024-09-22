import React from 'react'
import { Button } from './ui/button'

type Props = {}

function Contact({}: Props) {
  return (
    <div className='flex flex-col items-center justify-center p-2 gap-4 shadow-md ' id='contact'>
        <div className="flex flex-col gap-3">
            <Button asChild className='bg-gray-800'>
                <a href='mailto:sohail.iqbal@seecs.edu.pk'>
                Contact Me
                </a>
            </Button>
        </div>
        <p className='text-gray-400'>
        © Dr.Sohail Iqbal
        </p>
    </div>
  )
}

export default Contact