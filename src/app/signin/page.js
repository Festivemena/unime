"use client"
import React, {useState} from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {One, Two, Three, Four} from '../../assets'
// import Dropdown from '../../components/dropdown'

const page = () => {
  const router = useRouter()
  return (
    <div className='w-full h-full'>
    <div className='bg-[#FEC222] pt-4 w-full h-[15%]'>
      <IoArrowBack color='white' className='mt-4 ml-3' size={30} />
      <div className='bg-white h-[85%] rounded-tr-[50px] rounded-tl-[50px] mt-[15%]'> 
      <div className='font-bold text-3xl pt-32 px-8'>Log In</div>
      <div className='w-[100%]'>
      <div className='ml-[10%] mt-4'>
        Email:
      </div>
      </div>
      <input
      placeholder='Enter your Email' 
      type="email"
      className='w-[80%] opacity-40 border-2 ml-[10%] rounded-lg pl-3 h-[45px] border-black'
      />
      <div className='w-[100%]'>
      <div className='ml-[10%] mt-4'>
        Password:
      </div>
      </div>
      <input
      placeholder='Enter your Password' 
      type="password"
      className='w-[80%] opacity-40 border-2 ml-[10%] rounded-lg pl-3 h-[45px] border-black'
      />
      <div onClick={()=>{router.push('/editprofile')}}  className='bg-[#FEC222] w-[90%] ml-[5%] mt-16 text-center font-bold text-lg h-[45px] rounded-lg text-white py-2' >
        Log In
      </div>
      <div className='w-full text-right text-[#FEC222] pr-[5%] font-bold mt-1'>Forgotten Password?</div>
      <div className='font-bold text-center text-md w-full text-wrap mt-12'>Don't have an Account? <div onClick={()=> router.push('/signup')} className='text-[#FEC222] text-center'>Sign Up</div></div>
      </div>
    </div>
    </div>
  )
}

export default page
