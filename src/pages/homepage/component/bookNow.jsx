import star from "../../../assets/images/Star 1.png";
import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { BiSolidChevronDown } from "react-icons/bi";
import { carmodel, carname, fueltype } from "../data";
import { useNavigate } from "react-router-dom";

const BookNow = () => {
  const [isElementVisible, setElementVisibility] = useState(true);
  const [view, setview] = useState("book")

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
  const navigate = useNavigate()
  return (
    <>
      <div
        id="elementToHide"
        className={`w-[308px] z-[1] bg-white h-[400px] flex flex-col items-center justify-center bg-gray rounded-2xl ${
          isElementVisible ? "fixed top-[100px]" : "relative transition-all"
        }  right-4 p-4 shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.25)]`}
      >
        {view == "book" && (
          <div>
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
              <div
                onClick={() => setview("view")}
                className="inline-flexc cursor-pointer flex-col w-full items-start gap-[10px] my-2 px-[19px] py-[3px] relative rounded-[10px] overflow-hidden border border-solid border-black"
              >
                <div className="inline-flex w-full items-center gap-[102px] relative flex-[0_0_auto]">
                  <div className="relative w-full mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] flex items-center justify-between tracking-[0.09px] leading-[24.8px] whitespace-nowrap text-[#071C2C]">
                    Select your Car <BiSolidChevronDown fontSize={30} />
                  </div>
                </div>
              </div>
              <input
                type="text"
                className=" border border-blue-800 mb-2 text-black rounded-lg w-full mt-2 h-[30px] p-1 text-sm"
                placeholder="Enter Your Mobile Number"
              />
              <button className=" border bg-[#001B39] text-white rounded-xl py-2 w-full mt-2 h-[34px] mb-6 p-1 text-sm">
                Check Prices For Free
              </button>
            </div>
          </div>
        )}

        {view == "view" && (
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 h-[34px] mb-4 border-b">
              <div className="h-[25px] flex gap-4 top-0 left-0 font-bold text-[#001b39] text-[16px] tracking-[0.09px] leading-[24.8px] whitespace-nowrap">
                Select Car Manufacturer
                <img width={54} src="/car.svg" />
              </div>
            </div>
            <div className="h-[34px] text-[#4a4a4a] mb-4">
              <div className="w-[265px] h-[34px] items-center p-4 mb-2 bg-[#d9d9d9] flex rounded-[9px]">
                <GrSearch color="#4a4a4a" />
                <input
                  placeholder="Search"
                  type="text"
                  className="bg-transparent focus:outline-none w-full pl-4"
                />
              </div>
            </div>
            <div className="w-[236px] overflow-y-auto hidehs h-[260px] flex-shrink-0">
              <div className="flex flex-col gap-[20px]">
                {carname.map((car, i) => {
                  return (
                    <div
                      onClick={() => setview("model")}
                      key={i}
                      className="flex justify-start gap-4 items-center cursor-pointer"
                    >
                      <img
                        src={car.image}
                        style={{
                          aspectRatio: "2/1",
                          width: "70px",
                          objectFit: "contain",
                        }}
                        alt=""
                      />
                      <p className="nowrap tracking-[0.09px] leading-[24.84px] text-[20px] font-bold">
                        {car.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {view == "model" && (
          <div
            onClick={() => setview("fuel")}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex gap-4 h-[34px] mb-4 border-b">
              <div className="h-[25px] flex gap-4 top-0 left-0 font-bold text-[#001b39] text-[16px] tracking-[0.09px] leading-[24.8px] whitespace-nowrap">
                Select Car Manufacturer
                <img width={54} src="/car.svg" />
              </div>
            </div>
            <div className="h-[34px] text-[#4a4a4a] mb-4">
              <div className="w-[265px] h-[34px] items-center p-4 mb-2 bg-[#d9d9d9] flex rounded-[9px]">
                <GrSearch color="#4a4a4a" />
                <input
                  placeholder="Search"
                  type="text"
                  className="bg-transparent focus:outline-none w-full pl-4"
                />
              </div>
            </div>
            <div className="w-[236px] overflow-y-auto hidehs h-[260px] flex-shrink-0">
              <div className="flex flex-col gap-[20px]">
                {carmodel.map((car, i) => {
                  return (
                    <div
                      onClick={() => setview("fuel")}
                      key={i}
                      className="flex justify-start gap-4 items-center cursor-pointer"
                    >
                      <img
                        src={car.image}
                        style={{
                          aspectRatio: "2/1",
                          width: "70px",
                          objectFit: "contain",
                        }}
                        alt=""
                      />
                      <p className="nowrap tracking-[0.09px] leading-[24.84px] text-[20px] font-bold">
                        {car.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {view == "fuel" && (
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 h-[34px] w-full mb-4 border-b">
              <div className="h-[25px] w-full flex gap-4 top-0 left-0 font-bold text-[#001b39] text-[16px] tracking-[0.09px] leading-[24.8px] whitespace-nowrap">
                Select Fuel Type
              </div>
            </div>
            <div className="h-[34px] text-[#4a4a4a] mb-4">
              <div className="w-[265px] h-[34px] items-center p-4 mb-2 bg-[#d9d9d9] flex rounded-[9px]">
                <GrSearch color="#4a4a4a" />
                <input
                  placeholder="Search"
                  type="text"
                  className="bg-transparent focus:outline-none w-full pl-4"
                />
              </div>
            </div>
            <div className="w-[236px] overflow-y-auto hidehs h-[260px] flex-shrink-0">
              <div className="flex flex-col justify-around cursor-pointer h-[260px] gap-[20px]">
                {fueltype.map((car, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {setview("car") ;navigate("/car")}}
                      className="flex justify-start gap-4 items-center cursor-pointer"
                    >
                      <img
                        src={car.image}
                        style={{
                          aspectRatio: "2/1",
                          width: "70px",
                          objectFit: "contain",
                        }}
                        alt=""
                      />
                      <p className="nowrap tracking-[0.09px] leading-[24.84px] text-[20px] font-bold">
                        {car.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {view == "car" && (
            <div className="w-[310px] h-[434px] top-0 left-0">
              <div className="relative w-[328px] h-[454px] top-[-10px] left-[-10px] bg-[url(.png)] bg-[100%_100%]">
                <div className="flex-col items-center gap-[20px] top-[35px] left-[16px] inline-flex relative">
                  <div className="flex-col items-center gap-[20px] flex-[0_0_auto] inline-flex relative">
                    <div className="flex-col items-center gap-[33px] flex-[0_0_auto] inline-flex relative">
                      <img
                        className="relative w-[247px] h-[148px] object-cover"
                        alt="Image"
                        src="/1.png"
                      />
                      <div className="items-start gap-[60px] flex-[0_0_auto] inline-flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#001b39] text-[16px] tracking-[0.16px] leading-[normal] whitespace-nowrap">
                          Mercedes Maybach
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#001b39] text-[16px] tracking-[0.16px] leading-[normal] whitespace-nowrap">
                          Change
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col items-center gap-[19px] flex-[0_0_auto] inline-flex relative">
                    <img
                      className="w-[206px] h-[103px]"
                      alt="Black friday"
                      src="/2.png"
                    />
                    <p className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-[#4a4a4a] text-[14.8px] text-center tracking-[0.15px] leading-[23.6px] whitespace-nowrap">
                      Go ahead and book a service for your car.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
    </>
  );
};

export default BookNow;