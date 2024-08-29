import React from 'react';
import star1 from "../assets/Icon.png";
import star2 from "../assets/Icon (1).png";
import star3 from "../assets/Icon (2).png";
import star4 from "../assets/Icon (3).png";
import star5 from "../assets/Icon (4).png";

const SubmitingFeedback = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,_#9E00FF_0%,_#9E00FF_50%,_#5F0099_100%)] shadow-lg w-full max-w-xl absolute top-60 pb-8 h-[30%] lg:h-[50%] flex justify-center items-center text-center px-4 md:px-8">
      {/* Star Images */}
      <img src={star1} alt="" className="absolute bottom-0 right-4 md:right-8 w-[80px] md:w-[130px]" />
      <img src={star2} alt="" className="absolute top-[10px] md:top-[20px] right-[5px] md:right-[10px] w-[50px] md:w-[70px]" />
      <img src={star3} alt="" className="absolute bottom-[10px] md:bottom-[20px] left-[10px] md:left-[20px] w-[50px] md:w-[80px]" />
      <img src={star4} alt="" className="absolute bottom-[10px] md:bottom-[20px] right-[75px] md:right-[150px] w-[50px] md:w-[70px]" />
      <img src={star5} alt="" className="absolute left-[3.2rem] transform -translate-x-1/2 top-0 w-[60px] md:w-[100px]" />

      {/* Text */}
      <div className="text-yellow-500 font-bold text-3xl md:text-4xl lg:text-5xl text-center space-y-2">
        <p>THANK YOU</p>
        <p>FOR THE</p>
        <p>FEEDBACK!!</p>
      </div>
    </div>
  );
}

export default SubmitingFeedback;
