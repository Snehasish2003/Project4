import React from 'react';
import Rectangle from "../assets/Rectangle 5935.png";
import robot from "../assets/video_robot.png";
import search from "../assets/search.png"
import send from "../assets/send.png"

const Doubt = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center text-white font-[Montserrat]'>
      <span className='flex md:text-5xl text-[22px] mt-5 font-semibold font-[jost]'>
        TITLE NAME: <span> ASK YOUR&nbsp;</span> <span className='text-[#651FFF]'>DOUBTS</span>
      </span>
      <p className='w-[80%] md:w-[50%] text-[11px] sm:text-sm lg:text-xl text-center mt-5'>
        YOU CAN EASILY DOWNLOAD THE NOTES FROM BELOW AND ALSO ASK DOUBTS IF YOU HAVE ANY.
      </p>
      <div className='w-[60%] h-[50%] relative mt-8'>
        <img src={Rectangle} alt="" />
        <img src={robot} alt="" className='absolute w-[40%] bottom-0 left-1/2 transform -translate-x-1/2' />
      </div>
      <div className=" my-3 w-[60%]  sm:w-[50%] md:w-[52%] bg-[#2E3856] rounded-3xl h-[3.75rem] flex items-center justify-between border-none  shadow-sm mt-8 gap-4 px-6">
        <div className='flex gap-3 '>
          <img src={search} width={20} height={20} alt="" />
          <input type="text" className='bg-[#2E3856] border-none outline-none w-[10rem]' placeholder="Ask a Question" />
        </div>
        <div className='bg-none rounded-lg flex justify-center items-center w-[25px] h-[25px] cursor-pointer'><img src={send} alt="" width={20} height={20} /></div>
      </div>
    </div>




  )
}

export default Doubt;
