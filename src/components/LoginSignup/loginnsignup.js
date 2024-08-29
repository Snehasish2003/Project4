import React, { useState, useEffect } from 'react';
import './style.css';

import login_img from "../../assets/login_img.png";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setIsButtonDisabled(false);
    }
  }, [timer]);

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setSignUpError('');
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[+]?([0-9]{1,4})?[-. ]?([0-9]{1,15})$/;
    return phoneRegex.test(number);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (validatePhoneNumber(phone)) {
      // Simulate OTP send operation here (e.g., calling an API)
      setOtpSent(true);
      setIsButtonDisabled(true);
      setTimer(60);
      toast.success('OTP sent successfully');
    } else {
      toast.error('Please enter a valid phone number');
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    if (otp) {
      toast.success('OTP verified successfully');
      handleSignUpClick();
    } else {
      toast.error('Please enter the OTP');
    }
  };

  const handleFull = () => {
    navigate("/home");
  };

  return (
    <div className='body border-box'>
      <Toaster />
      <div className={`container-l ${isSignUp ? 'right-panel-active' : ''}`} id="main">
        <div className="sign-up relative">
          <form onSubmit={handleFull}>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              required
            />
            {signUpError && <p className="error-message">{signUpError}</p>}
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="login md:w-[50%]  w-[100%]">
          <form>
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={setPhone}
              containerClass='tel'
              inputClass='tel'
            />
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={handleSendOtp}
                disabled={isButtonDisabled}
                style={{
                  backgroundColor: isButtonDisabled ? 'lightgray' : '',
                  cursor: isButtonDisabled ? 'not-allowed' : 'pointer', color:isButtonDisabled && 'black'
                }}
              >
                {otpSent ? 'Resend OTP' : 'Send OTP'}
              </button>
              {isButtonDisabled && <span style={{ marginLeft: '10px' }}>{timer}s</span>}
            </div>

            {otpSent && (
              <>
                <input
                  type="text"
                  name="otp"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button onClick={handleVerifyOtp}>Verify</button>
              </>
            )}

            {loginError && <p className="error-message">{loginError}</p>}
          </form>
        </div>
        <div className="overlay-container md:block hidden">
          <div className="overlay">
            <div className="overlay-left">
              <img src={login_img} alt="Login" />
            </div>
            <div className="overlay-right">
              <img src={login_img} alt="Login" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
