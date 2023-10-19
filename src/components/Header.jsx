import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Login } from './Login';
import {FiMapPin} from "react-icons/fi"
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
   const [isDrawerVisible, setDrawerVisibility] = useState(false);
   const showDrawer = () => {
     setDrawerVisibility(true);
   };
   const hideDrawer = () => {
     setDrawerVisibility(false);
   };
   const athome = useLocation().pathname =="/"
  return (
    <>
      <div
        className={`w-full flex justify-between items-center px-4 ${
          athome ? "bg-transparent absolute top-0 z-10 pt-4" : "bg-zinc-900"
        } text-white h-[65px]`}
      >
        <div className="flex items-center gap-12">
          <Link
            to={"/"}
            className="flex items-center justify-center gap-4 md:gap-10 "
          >
            <img src={logo} className="w-[40px]" alt="logo" style={{}} />
            <p className="font-[400] font-[italic] text-[32px] text-gray almuni">
              CAR SERVICE
            </p>
          </Link>
          <div className="w-[129px] h-[19px] justify-center cursor-pointer items-center gap-[15px] inline-flex">
            <div className="text-white flex gap-2 text-lg font-bold leading-[18.40px] tracking-tight">
              <FiMapPin /> Hyderabad <FaAngleDown />
            </div>
            <div className="w-[15px] h-[9.55px] pl-0.5 pr-[0.62px] pt-[1.12px] pb-[0.79px] justify-center items-center flex">
              <div className="w-[12.38px] h-[7.64px] relative flex-col justify-start items-start flex" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[25px] text-inherit">
          <p className="navlink">Spares </p>
          <Link to={"/blogs"} className="navlink">
            Blog{" "}
          </Link>
          <p className="navlink">More </p>
          <div className="inline-flex items-start pl-[15.75px] pr-[15.09px] pt-[10.25px] pb-[11.64px] relative bg-[#001b39] rounded-[2.25px]">
            {localStorage.getItem("token") ? (
              <div
                className="relative cursor-pointer w-fit mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[15px] tracking-[0.17px] leading-[18.4px] whitespace-nowrap"
              >
                Customer
              </div>
            ) : (
              <div
                onClick={showDrawer}
                className="relative cursor-pointer w-fit mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-[15px] tracking-[0.17px] leading-[18.4px] whitespace-nowrap"
              >
                Login
              </div>
            )}
          </div>
        </div>
        <Login hide={hideDrawer} show={showDrawer} view={isDrawerVisible} />
      </div>
    </>
  );
};

export default Header;
