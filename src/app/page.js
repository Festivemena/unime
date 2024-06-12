"use client"

import React from 'react'
import {One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen} from "../assets"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoIosHeart } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { MdStore, MdHomeFilled } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import {items} from '../../dev/helpers'


const page = () => {
  const router = useRouter()
  const ProductList = ({ items }) => {
    return (
      <div className=" w-full">
        <div className="grid grid-cols-2 w-full gap-4">
          {items.map((item, index) => (
            <div onClick={()=>{router.push('/product')}} key={index} className="flex flex-col items-center p-4 border border-gray-300 rounded">
              <Image src={item.image} alt={item.name} width={150} height={150} className="object-cover" />
              <div className='w-full'>
              <div className="mt-2 text-[10px] font-semibold">{item.name}</div>
              </div>
              <div className='flex text-sm w-full'>
              <div className='flex'>{item.rating}<IoStarSharp color='#FFF500' className='mt-[2px] pl-[2px]'/></div>
              <div className='pl-2'>{item.seller}</div>
              </div>
              <div className='font-semibold flex w-full text-lg'>
               <div className='text-xl '> {item.price}</div>
               <div className='text-sm mt-[3px] ml-3 text-[#FEC222] font-medium'> {item.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* search Nav */}
      <div className='w-full px-3 pt-3 mb-2 justify-between flex'>
      <IoIosHeart onClick={()=>{router.push('/wishlist')}}  size={30} color='black'/>
      <input
        type="text"
        value=""
        className='bg-[#D9D9D9] text-sm pl-2 w-full ml-3 rounded-lg'
        placeholder='Search'
      />
      {/* Categories tab */}
      <div className='bg-[#FEC222] text-sm px-3 py-1 text-wrap ml-2 rounded-lg text-white text-center'>Uniben</div>
      </div>
      <div className='w-full px-4 bg-[#FEC222]'>
        <div className='text-center w-full text-xl pt-3 text-white'>Categories</div>
        <div className='flex w-full items-center justify-center mt-2 gap-5'>
          <div>
         <Image src={Five} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Phones</div>
         </div>
         <div>
         <Image src={Six} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Furnitures</div>
         </div>
         <div>
         <Image src={Seven} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Electronics</div>
         </div>
         <div>
         <Image src={Eight} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Tops</div>
         </div>
        </div>
         {/* next row */}
        <div className='flex w-full items-center justify-center mt-2 gap-5'>
          <div>
         <Image src={Nine} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Pants</div>
         </div>
         <div>
         <Image src={Ten} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Dress</div>
         </div>
         <div>
         <Image src={Twelve} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Accessories</div>
         </div>
         <div>
         <Image src={Thirteen} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Food</div>
         </div>
        </div>
         {/* next row */}
         <div className='flex w-full items-center justify-center mt-2 gap-5'>
          <div>
         <Image src={Fourteen} alt='Five' />
         <div className='text-sm text-center text-white font-medium'>Services</div>
         </div>
        </div>
      </div>
      {/* Recommend */}
      <div className='px-5 justify-between mt-3 flex'>
        <div className='flex font-semibold text-lg'>Recommended <IoStarSharp className='text-center ml-1 mt-1' color='#FFF500' /></div>
        <div className='flex font-semibold text-lg'>Filter <FaFilter className='text-center ml-1 mt-1' color='black' /></div>
      </div>
      <ProductList items={items} />
      {/* Nav FOoter */}
      <div className='w-full  h-[100px] sticky bottom-0 bg-white '>
      <div className='bg-[#FEC222] justify-between flex rounded-2xl w-[90%] ml-[5%] h-[70%]'>
        <div className=' flex justify-between ml-[5%] mt-3 w-[90%]'>
      <MdStore onClick={() => router.push('/market')} color='#686868' size={40} />
      <div className='h-[50px] w-[50px] rounded-full bg-white text-center items-center justify-center'>
      <MdHomeFilled color='#FEC222' className='ml-[5px] pt-[2px]' size={40} />
      </div>
      <IoPersonCircleSharp onClick={() => router.push('/profile')} color='#686868' size={40} />
      </div>
      </div>
      </div>
    </div>
  )
}

export default page
