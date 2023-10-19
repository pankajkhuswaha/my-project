/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { toast } from "react-toastify";

export const Login = ({ hide, show, view }) => {
  const [mobileNumber, setmobileNumber] = useState("");
  const [otp, setotp] = useState("")
  const [hidemobileno, setHidemobileno] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/login`, { mobileNumber });
      toast.success(res.data.message);
      setHidemobileno(false);
      console.log(res.data);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  const handleotpverify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/verify/otp`, { mobileNumber,otp });
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      hide();
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div
      className={`bg-[#0801010a] transition-all z-10 absolute ${
        view ? "right-0" : "right-[-100vw]"
      } flex flex-row justify-end top-0 m-h-[100vh] w-full`}
    >
      <div onClick={hide} className="w-[calc(100%-468px)] cursor-pointer"></div>
      <div
        onClick={show}
        className="bg-white relative right-0  w-[468px] h-[857.15px]"
      >
        <img
          className="absolute w-[348px] h-[253px] top-[89px] left-[60px] object-cover"
          alt="Element"
          src="/3226079-43024-1@2x.png"
        />
        <div className="absolute h-[29px] top-[366px] left-[207px] [font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-[#3f7ccd] text-[19.1px] tracking-[0.14px] leading-[normal]">
          Login
        </div>
        {hidemobileno && (
          <form onSubmit={handleSubmit}>
            <div className="absolute w-[387px] h-[50px] top-[429px] left-[41px] rounded-[6.36px] border-[1.27px] border-solid border-[#3f7ccd]">
              <div className="inline-flex items-center gap-[19.08px] relative top-[11px] left-[18px]">
                <div className="relative w-fit [font-family:'Poppins-Medium',Helvetica] font-medium text-[#3f7ccd] text-[15.9px] tracking-[0.14px] leading-[normal]">
                  +91
                </div>
                <img
                  className="relative w-px h-[25.43px]"
                  alt="Line"
                  src="line-132.svg"
                />
                <div className="relative w-[300px] h-[35px] font-medium text-[#3f7ccd] text-[12.7px] tracking-[0.14px] leading-[normal]">
                  <input
                    type="number"
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setmobileNumber(e.target.value)}
                    className="h-full w-full focus:outline-none -mt-1"
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex cursor-pointer items-start gap-[6.36px] px-[155.15px] py-[9.54px] absolute top-[498px] left-[41px] bg-[#3f7ccd] rounded-[6.36px] overflow-hidden">
              <button
                type="submit"
                className="relative cursor-pointer w-fit mt-[-1.27px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[15.9px] tracking-[0.14px] leading-[normal]"
              >
                Continue
              </button>
            </div>
          </form>
        )}
        {!hidemobileno &&<form onSubmit={handleotpverify}>
          <div className="absolute w-[387px] h-[50px] top-[429px] left-[41px] rounded-[6.36px] border-[1.27px] border-solid border-[#3f7ccd]">
            <div className="inline-flex items-center gap-[19.08px] relative top-[11px] left-[18px]">
              
              <div className="relative w-[300px] h-[35px] font-medium text-[#3f7ccd] text-[12.7px] tracking-[0.14px] leading-[normal]">
                <input
                  type="text"
                  placeholder="Enter OTP to Continue..."
                  value={otp}
                  onChange={(e) => setotp(e.target.value)}
                  className="h-full w-full focus:outline-none -mt-1"
                />
              </div>
            </div>
          </div>
          <div className="inline-flex cursor-pointer items-start gap-[6.36px] px-[155.15px] py-[9.54px] absolute top-[498px] left-[41px] bg-[#3f7ccd] rounded-[6.36px] overflow-hidden">
            <button
              type="submit"
              className="relative cursor-pointer w-fit mt-[-1.27px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[15.9px] tracking-[0.14px] leading-[normal]"
            >
              Continue
            </button>
          </div>
        </form>}
      </div>
    </div>
  );
};
