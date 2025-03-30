import Image, { StaticImageData } from 'next/image'
import React from 'react'

type propsType = {
    company?:string
    duration?:string
    role:string
    companyIcon?:StaticImageData
    description?:string
    tools?: {name:string,icon:StaticImageData} []
    description2?: string
    description3?:string

}
function WorkContent({company,companyIcon,description,tools,role,
    description2,description3}:propsType) {
  return (
    <div className="max-w-2xl w-full px-auto p-6 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
        <div className='flex flex-row justify-start items-center gap-2'>
            {companyIcon&&
                <Image
                    src={companyIcon}
                    className='w-4 h-4 md:w-5 md:h-5'
                    alt={company+' logo'}
                />
            }
            <p className='text-neutral-800 dark:text-neutral-200 font-semibold text-sm md:text-xl'> {company}  </p>
            <p className='text-neutral-800 dark:text-neutral-200 font-semibold text-sm md:text-xl'> - </p>
            <p className='text-neutral-800 dark:text-neutral-200 font-semibold text-sm md:text-xl'>{role}</p>
        </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal my-2.5">
            {description}
          </p>
          {description2&&
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2.5">
            {description2}
          </p>
            }
            {description3&&
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2.5">
            {description3}
          </p>
            }
          <div className="flex flex-row justify-start items-center gap-5 mt-5 px-1 flex-wrap">
            {tools?.map((item:{name:string,icon:StaticImageData})=>(
                <div
                    key={item.name}
                    className='flex flex-col justify-center items-center gap-2'
                >
                    <Image
                    src={item.icon}
                    alt={item.name+' image'}
                    className='w-4 h-4 md:w-5 md:h-5'
                    />
                    <p className='text-neutral-800 dark:text-neutral-200 text-[11px] md:text-xs font-normal'>
                        {item.name}
                    </p>
                </div>
            ))}
          </div>
        </div>
  )
}

export default WorkContent
