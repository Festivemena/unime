"use client";
import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Edit, Prof } from "../../assets";
import { FaSchool } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { MdHelpOutline } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";

const Page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');
        console.log(token);

        const form = new FormData();
        form.append('requestID', 'rid_1983');

        // Perform the POST request with the Bearer token
        const response = await axios.post(
          "https://api.vplaza.com.ng/users/getuser",
          form,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        // Handle the response data
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        // Handle any errors
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return (
    <div className="w-full bg-gray-200 h-screen">
      <div className="bg-[#FEC222] rounded-br-[50px] rounded-bl-[50px] pt-4 w-full h-[35%]">
        <div className="text-white font-bold flex justify-between text-xl ml-8 mt-6">
          <div className="flex w-full">
            <IoArrowBack onClick={() => { router.back() }} color="white" size={24} />
            <div className="-mt-1">Profile</div>
          </div>
          <div onClick={() => { router.push('/editprofile') }} className="w-full text-sm text-right pr-4">Edit Profile</div>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Prof} className="w-32 h-32 mt-3 object-cover mb-2 rounded-full" />
          <div className="text-white mt-2 font-semibold text-lg">{user?.username}</div>
          <div className="text-sm mb-2 text-white">{user?.email}</div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="bg-white flex px-4 py-4 rounded-lg mx-4">
          <FaSchool color="black" size={26} />
          <div className="text-black pl-4 text-[16px] font-semibold">School</div>
          <div className="text-black pl-4 text-[10px] w-full text-right font-semibold">{user?.school}</div>
        </div>
        <div className="bg-white flex px-4 py-4 mt-4 rounded-lg mx-4">
          <CiLock color="black" size={26} />
          <div className="text-black pl-4 text-[16px] font-semibold">Privacy Policy</div>
        </div>
        <div className="bg-white flex px-4 mt-4 py-4 rounded-lg mx-4">
          <MdHelpOutline color="black" size={26} />
          <div className="text-black pl-4 text-[16px] font-semibold">Help Center</div>
        </div>
        <div onClick={() => local storage.removeItem('token')} className="bg-white flex px-4 mt-4 py-4 rounded-lg mx-4">
          <IoIosLogOut color="black" size={26} />
          <div className="text-black pl-4 text-[16px] font-semibold">Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
