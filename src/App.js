import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import DoubtPage from './pages/DoubtPage';
import DemoPage from './pages/DemoPage';
import Home from './pages/Home';
import SettingPage from './pages/SettingPage';
import PricingPage from './pages/PricingPage';
import LoginSignUp2 from './components/LoginSignup2/LoginSignup2';
import Otp from './components/Otp/Otp';
import Forgot from './components/forgot/forget';
import SignUp from './components/LoginSignup2/SignUp';
import OtpConfirm from './components/OtpConfirm/OtpConfirm';
import PasswordChanged from './components/PasswordChanged';
import UserStats from './pages/UserStats';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route element={<Private />}> */}
        <Route path="/video" element={<VideoPage />} />
        <Route path='/doubt' element={<DoubtPage/>} />
        <Route path='/demo' element={<DemoPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/setting' element={<SettingPage/>} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/stats' element={<UserStats />} />
      {/* </Route> */}
        <Route path="/" element={<LoginSignUp2 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otpconfirm" element={<OtpConfirm />} />
        <Route path="/passchanged" element={<PasswordChanged />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
