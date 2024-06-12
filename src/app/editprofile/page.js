"use client";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Edit } from "../../assets";

const Page = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imageFile) {
      // Implement your image upload logic here
      console.log("Uploading image:", imageFile);
      // Example: Upload image to your server or cloud storage
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-input").click();
  };

  const router = useRouter();
  return (
    <div className="w-full h-full">
      <div className="bg-[#FEC222] pt-4 w-full h-[15%]">
        <div className="text-white font-bold text-xl ml-8 mt-6">Edit Profile</div>
        <div className="bg-white h-[95%] rounded-tr-[50px] rounded-tl-[50px] mt-[5%]">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="mt-3" onClick={triggerFileInput}>
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Selected"
                  className="w-32 h-32 object-cover mb-4 rounded-full"
                />
              ) : (
                <Image src={Edit} alt="Upload" />
              )}
            </div>
         
          <div className="w-[100%]">
            <div className="ml-[10%] mt-4">Full Name:</div>
          </div>
          <input
            placeholder="Enter your Full Name"
            type="text"
            className="w-[80%] opacity-40 border-2 rounded-lg pl-3 h-[45px] border-black"
          />
          <div className="w-[100%]">
            <div className="ml-[10%] mt-4">Gender:</div>
          </div>
          <input
            placeholder="Enter your Gender"
            type="text"
            className="w-[80%] opacity-40 border-2 rounded-lg pl-3 h-[45px] border-black"
          />
          <div className="w-[100%]">
            <div className="ml-[10%] mt-4">Phone Number:</div>
          </div>
          <input
            placeholder="Enter your Phone number"
            type="text"
            className="w-[80%] opacity-40 border-2 rounded-lg pl-3 h-[45px] border-black"
          />
          <div className="w-[100%]">
            <div className="ml-[10%] mt-4">Service offered (optional):</div>
          </div>
          <input
            placeholder="Enter services you offer"
            type="text"
            className="w-[80%] opacity-40 border-2 rounded-lg pl-3 h-[45px] border-black"
          />
          <div onClick={()=>{router.push('/')}} className="bg-[#FEC222] w-[90%] mt-16 text-center font-bold text-lg h-[45px] rounded-lg text-white py-2">
            Save
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
