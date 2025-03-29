import Image from 'next/image'
import React from 'react'

import DownloadIcon from '../public/downloadIcon.png'
import Link from 'next/link'


function Header() {
  return (
    <div className='left-9/12 h-10 top-10 mt-5 bg-transparent mr-10'>
        <div className="flex flex-row gap-3 justify-end items-center">
            <div className="cursor-pointer">
            <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
                <Link href="https://github.com/bharatvarmagit" passHref={true}>
                <p className='text-neutral-800 dark:text-neutral-200 text-[11px] md:text-sm font-normal '>
                    Github
                </p>
                </Link>

            </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
                <Link href="https://linkedin.com/in/bharatnamburi" passHref={true}>
                 <p className='text-neutral-800 dark:text-neutral-200 text-[11px] md:text-sm font-normal'>
                    LinkedIn
                </p>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-1  cursor-pointer">
                <Link href="mailto:bharatfullstack@gmail.com" passHref={true}>
                 <p className='text-neutral-800 dark:text-neutral-200 text-[11px] md:text-sm font-normal'>
                    Email
                </p>
                </Link>
            </div>
            <div className=" p-1 px-2.5 rounded-xl cursor-pointer border border-[rgba(185,183,183,0.1)] dark:bg-[rgba(255,255,255,0.88)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
                <a href='/cv-apr-2025.pdf' download="cv-bharat">
                <div className="flex flex-row justify-content items-center gap-1">
                    <Image
                        src={DownloadIcon}
                        className='w-3 h-3 md:w-3.5 md:h-3.5'
                        alt=''
                    />
                    <p className='text-black text-sm font-semibold'> Resume </p>
                </div>
                </a>

            </div>
        </div>
    </div>
  )
}

export default Header
