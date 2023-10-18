/* eslint-disable react/jsx-no-target-blank */
import { customerService, howservicework, nearWorkshop, reviews, serve } from "./data";
import "./homepage.scss";
const Services = () => {
  return (
    <div className="servicecontainer">
      <div className="sc ml-4 mt-4 flex  text-darkslategray-200 font-poppins">
        <div className="w-[874px] hidehs overflow-x-auto flex flex-row items-center justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start text-gray-200">
            <div className="subm font-semibold">Our Services</div>
            <img
              className="subm w-[115.75px] h-[0.75px]"
              alt=""
              src="/line-122.svg"
            />
          </div>
          <div className="subm cursor-pointer">Curated Custom Service</div>
          <div className="subm cursor-pointer">How Car Service Works?</div>
          <div className="subm cursor-pointer">{`Rating & Reviews`}</div>
          <div className="subm">Price List</div>
          <div className="subm ">Frequently Asked Question</div>
        </div>
      </div>

      <div className="ml-4 mt-[40px] flex flex-col items-start justify-start gap-[20px] text-xl text-gray-200 font-poppins">
        <b className="tracking-[0.18px] flex items-center w-[398px] h-9 shrink-0">
          Car Services Available In Hyderabad
        </b>
        <div className="text-base tracking-[0.15px] font-inter text-darkslategray-100 flex items-center w-[813px] h-16 shrink-0">
          Get hassle-free and professional car service, car repair, wheel care
          services, cashless insurance claim and much more in Hyderabad.
        </div>
      </div>

      <div className="ct2 ml-4 mb-16 mt-4 p-6 flex flex-wrap gap-4 justify-between">
        {serve.map((ele, i) => {
          return (
            <div key={i} className="w-[146px] h-[93.22px] cursor-pointer">
              <img className="w-[99.82px] h-[51.22px]" alt="" src={ele.img} />
              <div className=" tracking-[0.22px] font-semibold">{ele.txt}</div>
            </div>
          );
        })}
      </div>

      <div className="customerService m-4 w-[860px] mb-10">
        <b className="text-xl tracking-[0.18px] flex font-poppins text-gray-200 text-left items-center w-[278px] h-[49px]">
          Curated Custom Services
        </b>
        <div className="flex flex-wrap items-center justify-start gap-[80px] mt-2 p-3">
          {customerService.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-start gap-[20px] cursor-pointer"
            >
              <img
                className="relative w-[100px] object-cover"
                alt=""
                src={service?.img}
              />
              <div className="relative tracking-[0.22px] font-semibold">
                {service.txt}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="m-4 flex flex-row items-start justify-start gap-[17px] text-center text-khaki font-poppins">
        <div className="relative rounded-xl w-48 h-[187px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(180deg,_#ffe6cf,_#cbdaff)] w-48 h-[187px]" />
          <img
            className="absolute top-[119.37px] left-[142.5px] w-[61px] h-[85px]"
            alt=""
            src="/vector-28.svg"
          />
          <img
            className="absolute top-[140.5px] left-[0px] w-[38.5px] h-[43.71px]"
            alt=""
            src="/vector-29.svg"
          />
          <img
            className="absolute top-[143.5px] left-[0px] w-[34.5px] h-[43.5px]"
            alt=""
            src="/vector-30.svg"
          />
          <img
            className="absolute top-[146.5px] left-[0px] w-[30.5px] h-[40.5px]"
            alt=""
            src="/vector-31.svg"
          />
          <img
            className="absolute top-[149.5px] left-[0px] w-[26.5px] h-[37.5px]"
            alt=""
            src="/vector-32.svg"
          />
          <img
            className="absolute top-[152.5px] left-[0px] w-[22.5px] h-[34.5px]"
            alt=""
            src="/vector-33.svg"
          />
          <img
            className="absolute top-[91px] left-[22px] w-[170px] h-24 object-cover"
            alt=""
            src="/25003387-na-feb-34-1@2x.png"
          />
          <img
            className="absolute top-[1.23px] left-[103.75px] w-[86.91px] h-[78.9px]"
            alt=""
            src="/vector-34.svg"
          />
          <img
            className="absolute top-[0px] left-[170.5px] w-[86.25px] h-[78.63px]"
            alt=""
            src="/vector-35.svg"
          />
          <div className="absolute top-[20px] left-[15px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.22px] font-semibold">
              Miles
            </div>
            <div className="relative text-base tracking-[0.22px] font-light font-inter text-black text-left">
              <p className="m-0">Free Road Side</p>
              <p className="m-0">Assistance</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl w-48 h-[187px] overflow-hidden shrink-0 text-mediumorchid">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(180deg,_#fbcbf3_43.27%,_#4bc5d2)] w-48 h-[187px]" />
          <img
            className="absolute top-[73.88px] left-[2.51px] w-[189.27px] h-[110.24px]"
            alt=""
            src="/vector-38.svg"
          />
          <img
            className="absolute top-[82.5px] left-[10.51px] w-[180.77px] h-[105px]"
            alt=""
            src="/vector-39.svg"
          />
          <img
            className="absolute top-[154.51px] left-[161.19px] w-[30.81px] h-[32.49px]"
            alt=""
            src="/vector-36.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[38.02px] h-[33.52px]"
            alt=""
            src="/group-7413.svg"
          />
          <img
            className="absolute top-[80px] left-[36px] w-[167px] h-[111px] object-cover"
            alt=""
            src="/10782856-19199272-1@2x.png"
          />
          <div className="absolute top-[17px] left-[12px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.22px] font-semibold">
              Warranty
            </div>
            <div className="relative tracking-[0.22px] font-light font-inter text-black text-left">
              <p className="m-0">Save 5000 INR</p>
              <p className="m-0">Annually</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-xl [background:linear-gradient(180deg,_#fc7aa9,_rgba(117,_108,_225,_0))] w-48 h-[187px] overflow-hidden shrink-0 text-white">
          <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(180deg,_#6766db_29.23%,_rgba(253,_123,_169,_0.68)_70.42%)] w-48 h-[187px]" />
          <img
            className="absolute top-[0px] left-[17.53px] w-[186.5px] h-[72.22px]"
            alt=""
            src="/vector-40.svg"
          />
          <img
            className="absolute top-[0px] left-[11.53px] w-[186.5px] h-[72.22px]"
            alt=""
            src="/vector-41.svg"
          />
          <img
            className="absolute top-[0px] left-[5.53px] w-[186.5px] h-[72.22px]"
            alt=""
            src="/vector-42.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[196px] h-[76px]"
            alt=""
            src="/vector-43.svg"
          />
          <img
            className="absolute top-[54px] left-[87px] w-[161px] h-[161px] object-cover"
            alt=""
            src="/12144961-wavy-bus42-single03-1@2x.png"
          />
          <img
            className="absolute top-[80.67px] left-[0px] w-[106.1px] h-[118.68px]"
            alt=""
            src="/vector-44.svg"
          />
          <div className="absolute top-[17px] left-[13px] flex flex-col items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.22px] font-semibold">
              Accessories
            </div>
            <div className="relative tracking-[0.22px] font-light font-inter">
              Check them Out
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col items-start justify-start gap-[30px] text-xl text-gray-200 font-poppins">
        <b className="relative tracking-[0.18px] flex items-center w-[332px] h-[49px] shrink-0">
          Choose the workshop Near You
        </b>
        <div className="relative w-[768px] h-[258.27px] overflow-hidden shrink-0 mb-16">
          <div className="absolute top-[0px] left-[0px] rounded-4xs-5 bg-white w-[768px] h-[258.27px]" />
          <div className="absolute top-[0px] left-[0px] rounded-4xs-5 w-[829.17px] overflow-x-auto flex flex-row items-start justify-start gap-[16.99px]">
            {nearWorkshop.map((shop, i) => {
              return (
                <img
                  key={i}
                  className="relative rounded-xl w-[265.06px] h-[258.27px] object-cover"
                  alt=""
                  src={shop.img}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="relative w-[588px] m-4 text-xl text-gray-200 font-poppins"
        data-scroll-to="groupContainer"
      >
        <b className=" tracking-[0.18px] flex items-center w-[282px] h-[49px]">
          How Car Service Works ?
        </b>
        <div className="flex gap-4 flex-wrap justify-between">
          {howservicework.map((service, i) => {
            return (
              <div
                key={i}
                className="w-[264px] gap-3 flex items-center justify-end flex-col"
              >
                <img src={service.img} width={"200px"} alt={service.txt} />
                <b>{service.txt}</b>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="relative w-[588px] m-4 mt-20 pb-4 text-xl text-gray-200 font-poppins"
        data-scroll-to="groupContainer"
      >
        <b className="tracking-[0.18px] flex items-center w-[392px] h-[49px]">
          What Car Owners in Hyderabad Say
        </b>
        <div className="w-[775px] h-[965px] flex flex-wrap gap-4 text-base">
          {
            reviews.map((review,i)=>{
              return (
                <div
                  key={i}
                  className="relative left-[0px] w-[376px] h-[300px]"
                >
                  <img
                    className=" absolute -z-10 w-[376px] h-[300px] object-cover"
                    alt=""
                    src="/group-7462@2x.png"
                  />
                  <div className="p-4 pt-8">
                    <div className="absolute w-[287px] h-[49px] top-[52px] left-[25px]">
                      <img
                        className="absolute w-[48px] h-[48px] top-0 left-0 object-cover"
                        alt="Ellipse"
                        src={review.img}
                      />
                      <div className="absolute w-[218px] h-[49px] top-0 left-[73px]">
                        <div className="relative w-[214px] h-[49px]">
                          <div className="absolute w-[189px] top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#001b39] text-[16px] tracking-[0.18px] leading-[normal]">
                            {review.name}
                          </div>
                          <div className="absolute w-[106px] h-[17px] top-[30px] left-0">
                            <img
                              className="left-0 absolute w-[17px] h-[17px] top-0 object-cover"
                              alt="Image"
                              src="/image-91@2x.png"
                            />
                            <img
                              className="left-[22px] absolute w-[17px] h-[17px] top-0 object-cover"
                              alt="Image"
                              src="/image-91@2x.png"
                            />
                            <img
                              className="left-[44px] absolute w-[17px] h-[17px] top-0 object-cover"
                              alt="Image"
                              src="/image-91@2x.png"
                            />
                            <img
                              className="left-[66px] absolute w-[17px] h-[17px] top-0 object-cover"
                              alt="Image"
                              src="/image-91@2x.png"
                            />
                            <img
                              className="left-[89px] absolute w-[17px] h-[17px] top-0 object-cover"
                              alt="Image"
                              src="/image-91@2x.png"
                            />
                          </div>
                          <div className="absolute h-[15px] top-[32px] left-[127px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#4a4a4a] text-[12px] tracking-[0.22px] leading-[normal]">
                            {review.old}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="absolute w-[338px] top-[122px] left-[22px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#282828] text-[12px] tracking-[0.22px] leading-[18.4px]">
                     {review.review}
                    </p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Services;



