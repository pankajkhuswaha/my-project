import React from 'react'
import star from "../../assets/images/Star 1.png"
import { useEffect, useState } from "react";

const BookNow = () => {
   const [isElementVisible, setElementVisibility] = useState(true);

   useEffect(() => {
     const handleScroll = () => {
       const elementToHide = document.getElementById("elementToHide");
       const footer = document.getElementById("footer");

       if (!elementToHide || !footer) {
         return;
       }

       // Get the position of the footer relative to the viewport
       const footerPosition = footer.getBoundingClientRect().top;

       // If the element approaches the footer (within 100 pixels), hide it
       if (footerPosition < 518) {
         setElementVisibility(false);
       } else {
         setElementVisibility(true);
       }
     };

     // Attach the function to the scroll event
     window.addEventListener("scroll", handleScroll);

     // Cleanup the event listener on component unmount
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  return (
    <div
      id="elementToHide"
      className={`w-[308px] bg-white flex flex-col justify-between bg-gray rounded-2xl ${
        isElementVisible ? "fixed top-[100px]" : "relative transition-all"
      }  right-4 border p-4  shadow`}
    >
      <div className="w-[230px] h-[88px]">
        <p className="h-[88px] top-0 left-0 font-semibold text-black text-[32px] tracking-[0.11px] leading-[44.3px]">
          Book your Car
          <br />
          Service Now !
        </p>
      </div>
      <p className="text-gray-700 mb-0 font-bold text-lg mt-2">
        Get instant quotes for <br /> your car service
      </p>
      <div className="text-[#FBBC04] font-bold text-md mt-4 mb-2 flex gap-4">
        Rating
        <img src={star} width={20} alt="star" />
        4.7 / 5
      </div>
      <div>
        <input
          type="text"
          className=" border border-blue-800 text-black rounded-xl w-full mt-2 h-[30px] p-1 text-sm"
          placeholder="Select Your Car"
        />
        <input
          type="text"
          className=" border border-blue-800 text-black rounded-xl w-full mt-2 h-[30px] p-1 text-sm"
          placeholder="Enter Your Mobile Number"
        />
        <button className=" border bg-[#001B39] text-white rounded-xl py-2 w-full mt-2 h-[34px] mb-6 p-1 text-sm">
          Check Prices For Free
        </button>
      </div>
    </div>
  );
}

export default BookNow