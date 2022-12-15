import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import back from '../src/assets/back.jpg'
import Navbar from './components/Navbar';
const Home = () => {
    const [RoomCode,setRoomCode] = useState("");
    const navigate = useNavigate();
    const submitCode = (e) =>{
        e.preventDefault();
        navigate(`/room/${RoomCode}`);
    };
    return (
      <div className="">
        {/* Navbar */}
        <Navbar/>
        {/* Hero */}
        <div className="relative">
          {/* Image */}
          <div className="absolute h-[35rem] flex overflow-hidden">
            <img
              src={back}
              alt=""
              className="object-cover 
            w-[100vw] h-[100vh]"
            />
          </div>
          {/* Hero Info */}
          <div className="z-10 relative px-4">
            <div className="pb-8">
              <h1 className="text-[60px] text-white pt-6">CallBuddy</h1>
              <p className="text-[26px] text-white -mt-2">with ZegoCloud</p>
            </div>
            {/* Enter Code */}
            <form
              onSubmit={submitCode}
              className="flex flex-col items-center
            justify-center text-white"
            >
              <label htmlFor="" className="font-bold text-[30px] pt-12">
                Enter The Room Code
              </label>
              <br />
              <input
                type="text"
                required
                placeholder="Enter Room Code Here"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="bg-blue-500
                placeholder:text-white py-1 px-4 max-w-[16rem] 
                rounded-full pl-3 mt-4"
              />
              <button
                type="submit"
                className="bg-orange-500 rounded-[0.5rem] 
        mt-4 py-1.5 px-4 font-bold"
              >
                Enter Room
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Home
