import React from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import img1 from './../../assets/Vector.svg';

const Footer = () => {
  return (
    <div>
      <hr className="w-full border border-gray-700 " />
      <footer className="bg-black text-white py-12 mt-auto">
        <div className="container mx-auto px-10">
          <div className="flex flex-col lg:flex-row justify-between ">
            <div className="lg:ml-[10%] mb-8 lg:mb-0 lg:w-[30%]">
              <h3 className="text-lg uppercase mb-6 lg:mb-8 flex items-center">
                <img src={img1} alt="img" />
              </h3>
              <nav>
                <ul className="flex flex-col gap-2 lg:gap-6 w-[100%] md:w-[60%] lg:w-[100%] ">
                  <li>
                    <p>A pioneering tech company driven by 
                      innovation, excellence, and a passion for 
                      creating cutting-edge solutions
                    </p>
                  </li>
                  <li>
                    <p className='hover:brightness-125'>team@rnpsoft.com</p>
                  </li>
                  <li>
                    <p className='text-gray-500'>+91 9798219701</p>
                    <p className='text-gray-500'>+91 8637845107</p>
                  </li>
                  
                </ul>
              </nav>
            </div>
            <div className="lg:mt-[7%] mb-8 lg:mb-0">
              <h3 className="text-lg uppercase mb-3 lg:mb-8">
                About Us
              </h3>
              <nav>
                <ul className="flex flex-col gap-2 lg:gap-6">
                  <li>
                    <span>Home</span>
                  </li>
                  <li>
                    <span>Our Team</span>
                  </li>
                  <li>
                    <span>Our Services</span>
                  </li>
                  <li>
                    <span>Career</span>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="lg:mt-[6.5%] lg:mr-[14%]">
              <h3 className="text-lg uppercase mb-8">
                Follow Us
              </h3>
              <nav>
                <ul className="flex gap-2 text-2xl">
                  <li><a href="/"><FaInstagram /></a></li>
                  <li><a href="/"><FaWhatsapp /></a></li>
                  <li><a href="/"><CiLinkedin /></a></li>
                  <li><a href="/"><CiTwitter /></a></li>
                  <li><a href="/"><CiYoutube /></a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="pt-12 mt-4">
            <p className='text-gray-500 text-center lg:text-left lg:ml-[10%]'>&copy; 2024 RnPsoft, All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
