import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import './LoginSignup2.css';
import eclipse4 from "../../assets/Ellipse 4.png";
import eclipse2 from "../../assets/Ellipse 2.png";
import eclipse3 from "../../assets/Ellipse 3.png";
import eclipse5 from "../../assets/Ellipse 5.png";
import { useNavigate } from 'react-router-dom';

const LoginSignUp2 = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate=useNavigate();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <section className="Loginsignup2 relative p-5 flex h-screen flex-col md:flex-row gap-20 md:gap-0 justify-evenly items-center">
        {/* Background eclipse images */}
        <img src={eclipse4} alt="" className="z-10 absolute left-0 top-[10rem] w-[10rem]" />
        <img src={eclipse2} alt="" className="z-10 absolute right-0 bottom-[0px] w-[38rem]" />
        <img src={eclipse3} alt="" className="z-10 hidden lg:block absolute left-[10rem] top-[-5rem] w-[40rem]" />
        <img src={eclipse5} alt="" className="z-10 absolute right-0 top-0 w-[8rem]" />

        <div
          className="w-full h-[430px] rounded-3xl z-20 shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 lg:px-16"
          style={{ background: "rgba(255, 255, 255, 0.6)" }} // Semi-transparent background for the container
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-black">
              Login
            </h1>
            <p className="text-sm text-center font-light text-black dark:text-black">
              Don't have an account yet?{" "}
              <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Sign up
              </a>
            </p>
            <form className="space-y-4 md:space-y-6" onSubmit={(e)=>{e.preventDefault(); navigate("/home")}}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black dark:text-black">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-black rounded-lg block w-full p-2.5"
                  style={{ background: "rgba(255, 255, 255, 0)", border: "2px solid black" }} // Match background color
                  required
                />
              </div>
              <div>
                <label className="block mb-2 -mt-4 text-sm font-medium text-black dark:text-black">
                  Your Password{" "}
                  <button type="button" style={{ display: "flex" }} className="float-right" onClick={toggleVisibility}>
                    {isVisible ? <FaEyeSlash className="mx-1 mt-1" /> : <FaEye className="mx-1 mt-1" />}
                    Hide
                  </button>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={isVisible ? 'text' : 'password'}
                  className="text-black rounded-lg block w-full p-2.5 "
                  style={{ background: "rgba(255, 255, 255, 0)", border: "2px solid black" }} // Match background color
                  required
                />
              </div>
              <div className="flex items-center justify-between float-right">
                <a href="/forgot" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 -mt-5 underline text-black">
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white font-medium rounded-full text-sm px-5 py-2.5 text-center"
                style={{ background: "black" }}
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginSignUp2;
