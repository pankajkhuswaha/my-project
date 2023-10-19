import star from "../../../assets/images/Mask group.png";
import "./hero.css";

const Hero = () => {

  return (
    <>
      <div id="hero" style={{background:"url(/hero.png)"}} className="w-full pt-[64px] relative text-white">
        <div className="z-10 top-0 w-full">
          <div className="w-[70%] p-4 mt-10">
            <p className="experince ">
              Experience The Best Car Services In Hyedrabad
            </p>
            <div className="sub-ex mt-[16px]   w-[661px] ">
              We provide Our Services in over 100+ Major Cities also.
            </div>
            <p className="herop w-[776px] mt-[79px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              egestas ligula. Nulla facilisi. Phasellus faucibus ligula id
              mauris varius, eget faucibus lorem fringilla. Vivamus ut felis
              porta, luctus libero eget, feugiat velit. Sed aliquet leo et ex
              sodales,
            </p>
            <div className="w-[70%] flex mt-4 mb-4">
              <div className="w-1/2 text-2xl border-r-2 border-white  font-bold flex gap-3 items-start">
                <div style={{ width: "67px", height: "67px", flexShrink: 0 }}>
                  <img src={star} alt="" />
                </div>
                <div>
                  <p className="rat">4.7</p>
                  <p className="ratp">Based on 100000+ Reviews</p>
                </div>
              </div>
              <div className="w-1/2 text-2xl border-l pl-2 font-bold flex gap-3 items-start">
                <div style={{ width: "67px", height: "67px", flexShrink: 0 }}>
                  <img src="/mask-group2@2x.png" alt="" />
                </div>
                <div>
                  <p className="rat">2,50,000</p>
                  <p className="ratp">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
