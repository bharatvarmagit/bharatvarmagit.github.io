import React from 'react'
import { Spotlight } from './ui/spotlight-new'
import ColourfulText from './ui/colorful-text'
import Image, { StaticImageData } from 'next/image'
import Header from './header'


type skillType = {
    skills:{name:string,icon:StaticImageData}[]
}


function hero({skills}:skillType) {
  return (
    <div className="h-screen">

      <Header/>

    <div className="h-full -mt-2 rounded-md flex md:items-center  md:justify-center overflow-hidden z-10">
        <Spotlight />

      <div className=" max-w-6xl  flex flex-col gap-4 mx-auto  w-full pt-20 md:pt-0">
        <h1 className="text-2xl h-20 md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50" >
           From Intuitive UIs to Intelligent APIs
        </h1>
        <h1 className='text-xl md:text-5xl text-center mx-auto'>
            <ColourfulText text='Full-Stack Engineer' />
        </h1>
        <p className="font-medium text-sm md:text-xl text-neutral-300 max-w-2xl text-center mx-auto px-2">
           Meet Bharat - Your friendly full-stack dev with a knack for frontend magic having 4 years of experience in building web and mobile apps.
        </p>
        <div className='flex justify-center items-center mx-auto px-2 max-w-6xl gap-6 flex-wrap mt-10'>
            {skills?.map(({name,icon}:{name:string,icon:StaticImageData})=>(
                <div  key={name} className='flex  flex-col justify-start  items-center gap-2 '>
                    <Image
                        src={icon}
                        alt='skillName'
                       className='w-4 h-4 md:w-5 md:h-5'
                    />
                    <p className='text-neutral-800 dark:text-neutral-200 text-[10px] md:text-sm font-normal'>
                        {name}
                    </p>
            </div>
            ))}

        </div>
      </div>
    </div>
    </div>
  )
}

export default hero
