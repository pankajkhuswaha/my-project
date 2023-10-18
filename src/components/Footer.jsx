const Footer = () => {
  const Foot = [
    {
      parent: "ABOUT US",
      children: [
        "FAQs",
        "Contact Us",
        "Careers",
        "Terms and Conditions",
        "Privacy Policy",
        "Car Service Partners",
        "Workshop Locator",
        "Offers",
        "Reviews",
        "Directory",
      ],
    },
    {
      parent: "Our Services",
      children: [
        "Scheduled Services",
        "AC Services",
        "Cleaning & Detailing",
        "Lights & Fitments",
        "Denting Painting",
        "Insurance Services",
        "Custom Repair",
        "Batteries",
        "Tyres",
        "Detailing Services",
        "Windshields & Glass",
      ],
    },
    {
      parent: "Luxary Brand",
      children: [
        "Mercedes",
        "BMW",
        "Audi",
        "Volvo",
        "Mitsubishi",
        "Jaguar",
        "Porsche",
        "Rolls Royce",
        "Ferrari",
        "Land Rover",
      ],
    },
    {
      parent: "POPULAR Brand",
      children: [
        "Maruti Suzuki",
        "Hyundai",
        "Honda",
        "Toyota",
        "Tata",
        "Mahindra",
        "Chevrolet",
        "Fiat",
        "Renault",
        "Kia",
        "Skoda",
        "Volkswagen",
      ],
    },
  ];
  const footinfo = [
    {
      key: "Email",
      value: "Info@Carservice.in",
      icon: "/div-3wrwr@2x.png",
    },
    {
      key: "Phone Number",
      value: "9388893888",
      icon: "/divpgewo@2x.png",
    },
    {
      key: "Working Days",
      value: "Monday - Sunday",
      icon: "/div-2wrtx@2x.png",
    },
    {
      key: "Working Hours",
      value: "7:00AM - 9:00PM(IST)",
      icon: "/div-2x3cu@2x.png",
    },
  ];
  return (
    <div id="footer">
      <div className="bg-[#001B39]">
        <div className="p-[98px] flex gap-[110px] ">
          {Foot.map((ele, i) => {
            return (
              <div key={i} className="flex flex-col items-start gap-[45px] ">
                <h1
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "15.984px",
                  }}
                  className="uppercase"
                >
                  {ele.parent}
                </h1>
                <div
                  style={{
                    display: "flex",
                    padding: "0px 5.64px 12.8px 3px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "30px",
                  }}
                >
                  {ele.children.map((ele, i) => {
                    return (
                      <p
                        key={i}
                        className="nowrap"
                        style={{
                          color: "#FFF",
                          fontFamily: "Inter",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "13.8px" /* 76.667% */,
                          letterSpacing: "1px",
                        }}
                      >
                        {" "}
                        {ele}{" "}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[100] h-[297px]  bg-[#282828] flex items-center gap-16 justify-end p-10">
        <div className="w-[30%] flex flex-col gap-6">
          <div className="w-[196px] h-[22px]">
            <p className="h-[22px] top-0 left-0 font-medium text-white text-[12px] tracking-[0.12px] leading-[22.0px] whitespace-nowrap">
              F-212, DLF NEW TOWN HEIGHTS,
            </p>
          </div>
          <div className="w-[324px] h-[22px]">
            <p className="h-[22px] top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[12px] tracking-[0.12px] leading-[22.0px] whitespace-nowrap">
              SECTOR 91, Garhi Harsaru, Gurugram, Haryana, 122505
            </p>
          </div>
          <div className="flex gap-8">
            <img className="w-[25px] h-[30px]" alt="" src="/link@2x.png" />
            <img className="w-[25px] h-[25px]" alt="" src="/link1@2x.png" />
            <img className="w-[25px] h-[25px]" alt="" src="/link2@2x.png" />
            <img className="w-[25px] h-[25px]" alt="" src="/link3@2x.png" />
            <img className="w-[25px] h-[25px]" alt="" src="/link4@2x.png" />
          </div>
        </div>
        <div className="w-[50%]">
          {footinfo.map((info, i) => {
            return (
              <div
                key={i}
                className="mx-auto my-4 flex w-full justify-between items-center"
              >
                <div className="flex items-center text-white h-full ">
                  <img
                    className="w-[30px] h-[16px]  object-cover mr-2"
                    alt=""
                    src={info.icon}
                  />
                  <div className="text-[10.62px]">{info.key}</div>
                </div>
                <div className="text-[13px] leading-[16.1px] text-white font-medium">
                  {info.value}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-start gap-[19px]">
          <img
            className="relative w-[198px] h-[61.19px] object-cover"
            alt=""
            src="/link--playstorepng@2x.png"
          />
          <img
            className="relative w-[198px] h-[61.19px] object-cover"
            alt=""
            src="/link--appstorepng@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
