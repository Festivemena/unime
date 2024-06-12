"use client"

import React from 'react'
import { Activ8 } from '@/assets'
import { useState } from 'react'
import Image from 'next/image'
import { MdStore, MdHomeFilled } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";

const Store = () => {
  return (
    <div>
      Store
    </div>
  )
}

const Activate = () => {
  return (
    <div>
      <div className="flex flex-col h-screen items-center"> 
           <Image src={Activ8} className="px-3 mt-48 object-cover mb-2 " />
          <div className=' text-xs text-center font-medium w-full px-4'>Activate your store for just #500 and enjoy a month-long selling spree! With Metor, post unlimited goods for sale until the same date next month. Don't miss out on this opportunity to showcase your items to your university community!</div>
          <div className='text-[#FEC222] mt-12 text-xl font-bold text-center'>Activate</div>
           </div>
     
            {/* Nav FOoter */}
      <div className='w-full  h-[100px] sticky bottom-0 bg-white '>
      <div className='bg-[#FEC222] justify-between flex rounded-2xl w-[90%] ml-[5%] h-[70%]'>
        <div className=' flex justify-between ml-[5%] mt-3 w-[90%]'>
      <div className='h-[50px] w-[50px] rounded-full bg-white text-center items-center justify-center'>
      <MdStore onClick={() => router.push('/market')} className='ml-[5px] pt-[6px]' color='#FEC222' size={40} />
      </div>
      <MdHomeFilled color='#686868' className='' size={40} />
      <IoPersonCircleSharp onClick={() => router.push('/profile')} color='#686868' size={40} />
      </div>
      </div>
      </div>
    </div>
  )
}

const page = () => {
  const [active, setActive] = useState(true);
  return (
    <div>
       {active ? (
        <Store />
      ) : (
        <Activate />
      )      }
    </div>
  )
}

export default page