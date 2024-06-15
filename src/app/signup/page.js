"use client"
import React, {useState} from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/navigation'
import axios from 'axios';
import Image from 'next/image'
import {One, Two, Three, Four} from '../../assets'
// import Dropdown from '../../components/dropdown'

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Simple validation
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://swif-server.onrender.com/api/users/register', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Allow all origins, adjust as necessary for production
        },
      });

      if (response.status === 201) {
        alert('Sign up successful');
        localStorage.setItem('token', response.data.token);
        router.push('/editprofile');
      } else {
        alert('Sign up failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Sign up failed');
    }
  };


  return (
    <div className='w-full h-full'>
    <div className='bg-[#FEC222] pt-4 w-full h-[15%]'>
      <IoArrowBack color='white' className='mt-4 ml-3' size={30} />
      <div className='bg-white h-[85%] rounded-tr-[50px] rounded-tl-[50px] mt-[15%]'> 
      <div className='font-bold text-3xl pt-16 px-8'>Sign Up</div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
      <div className='w-[100%]'>
      <div className='ml-[10%] mt-4'>
        Email:
      </div>
      </div>
      <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
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
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      placeholder='Enter your Password' 
      type="password"
      className='w-[80%] opacity-40 border-2 ml-[10%] rounded-lg pl-3 h-[45px] border-black'
      />
      <div className='w-[100%]'>
      <div className='ml-[10%] mt-4'>
        Confirm Password:
      </div>
      </div>
      <input
       value={confirmPassword}
       onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder='Confirm your Password' 
      type="password"
      className='w-[80%] opacity-40 border-2 ml-[10%] rounded-lg pl-3 h-[45px] border-black'
      />
       <button type="submit" className='bg-[#FEC222] w-[90%] ml-[5%] mt-16 text-center font-bold text-lg h-[45px] rounded-lg text-white py-2'>
              Sign Up
            </button>
          </form>
      {/* <div className='w-full text-right text-[#FEC222] pr-[5%] font-bold mt-1'>Forgotten Password?</div> */}
      <div className='font-bold text-center text-md w-full text-wrap mt-12'>Already have an Account? <div onClick={()=>{router.push('/signin')}} className='text-[#FEC222] text-center'>Log In</div></div>
      </div>
    </div>
    </div>
  )
}

export default page
