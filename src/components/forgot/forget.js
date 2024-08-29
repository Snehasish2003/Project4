import React, { useState } from 'react';
import './forget.css';
import eclipse4 from "../../assets/Ellipse 4.png";
import eclipse2 from "../../assets/Ellipse 2.png";
import eclipse3 from "../../assets/Ellipse 3.png";
import eclipse5 from "../../assets/Ellipse 5.png";
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
  const navigate=useNavigate();
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    else{
      navigate("/passchanged")
    }
    console.log("Code:", code, "New Password:", newPassword);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section  className="Loginsignup2 forgot relative p-5 flex h-screen flex-col md:flex-row gap-20 md:gap-0 justify-evenly items-center" >
    {/* Background eclipse images */}
    <img src={eclipse4} alt="" className="z-10 absolute left-0 top-[10rem] w-[10rem]" />
    <img src={eclipse2} alt="" className="z-10 absolute right-0 bottom-[0px] w-[38rem]" />
    <img src={eclipse3} alt="" className="z-10 hidden lg:block absolute left-[10rem] top-[-5rem] w-[40rem]" />
    <img src={eclipse5} alt="" className="z-10 absolute right-0 top-0 w-[8rem]" />
    <div className="reset-password-container z-20">
      <h2>Reset Password</h2>
      <p>Confirmation Code Sent in Mail</p>
      <form onSubmit={handleSubmit}>
      <h3>Enter code</h3>
        <div className="code-input-container">
          {Array.from({ length: 5 }).map((_, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={code[idx] || ""}
              onChange={(e) => {
                const newCode = code.split("");
                newCode[idx] = e.target.value;
                setCode(newCode.join(""));
              }}
              className="code-input text-black"
            />
          ))}
        </div>

        <input
          type={passwordVisible ? "text" : "password"}
          className='text-black'
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        
        <input
          type={passwordVisible ? "text" : "password"}
          className='text-black'
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <label className="label">
          <input
            type="checkbox"
            checked={passwordVisible}
            onChange={togglePasswordVisibility}
          />
          Show Password
        </label>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </section>
  );
};

export default Forgot;