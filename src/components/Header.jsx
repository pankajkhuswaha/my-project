import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Login } from './Login';
const Header = () => {
   const [isDrawerVisible, setDrawerVisibility] = useState(false);

   const showDrawer = () => {
     setDrawerVisibility(true);
   };

   const hideDrawer = () => {
     setDrawerVisibility(false);
   };
  return (
    <div className="w-full flex justify-between items-center pt-4 px-4">
      <div className="flex items-center gap-4 md:gap-10 ">
        <img src={logo} className="w-[60px]" alt="logo" style={{}} />
        <p className="font-[400] font-[italic] text-[32px] text-gray almuni">
          CAR SERVICE
        </p>
      </div>
      <div className="flex items-center gap-[25px]">
        <p className="navlink">Spares </p>
        <p className="navlink">Blog </p>
        <p className="navlink">More </p>
        <div className="inline-flex items-start pl-[15.75px] pr-[15.09px] pt-[10.25px] pb-[11.64px] relative bg-[#001b39] rounded-[2.25px]">
          <div
            onClick={showDrawer}
            className="relative cursor-pointer w-fit mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[15px] tracking-[0.17px] leading-[18.4px] whitespace-nowrap"
          >
            Login
          </div>
        </div>
      </div>
      <Login hide={hideDrawer} show={showDrawer} view={isDrawerVisible} />
    </div>
  );
};

export default Header;
