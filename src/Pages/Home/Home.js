import React, { useContext } from "react";
import background from "../../assets/images/Rectangle 1.png";

import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import ImageSlide from "./ImageSlider/ImageSlide";

const Home = () => {
  const { destination } = useContext(AuthContext);
  console.log(destination)

  return (
    <div>
      <div className="hero">
        <img className="h-[100vh] w-full" src={background} alt="" />
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content max-w-[84rem] mt-10  text-neutral-content justify-between items-start p-0">
          <div className="w-1/2 py-10 pl-16 pr-3">
            <div className=" text-start mx-auto">
              <h1 className="mb-5 text-7xl font-bold font-serif">
                {destination.name}
              </h1>
              <p className="mb-5">
                {destination?.description?.length > 250 ? destination?.description?.slice(0, 250) + ' . . .' : destination?.description}
              </p>
              <Link to="/booking">
                <button className="px-4 text-black font-semibold h-10 bg-warning rounded my-auto flex items-center">
                  Booking <FaArrowRight className="ml-3"></FaArrowRight>{" "}
                </button>
              </Link>
            </div>
          </div>

          <div className="w-1/2">
            <ImageSlide></ImageSlide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
