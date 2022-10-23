import React from "react";
import DarkHeader from "../Shared/DarkHeader/DarkHeader";
import map from "../../assets/images/image 1.png";
import image1 from "../../assets/images/Rectangle 26.png";
import image2 from "../../assets/images/Rectangle 27.png";
import image3 from "../../assets/images/Rectangle 28.png";
import { FaStar } from "react-icons/fa";

const Hotels = () => {
  return (
    <div>
      <div>
      <DarkHeader></DarkHeader>
      </div>
      <div className="container mb-10 mx-auto flex mt-24">
        <div className="hotels pl-5 w-1/2">
          <div className="card rounded-none pr-10 mb-8 card-side bg-base-100">
            <figure>
              <img src={image1} className="w-72" alt="hotel" />
            </figure>
            <div className="card-body pl-4 p-0 text-start">
              <h2 className="card-title">
                Light bright airy stylish apt & safe peaceful stay
              </h2>
              <p>4 guests 2 bedrooms 2 beds 2 baths</p>
              <p>Wif Air conditioning Kitchen</p>
              <p>Cancellation fexibility availiable</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-warning mr-2"></FaStar>
                  <span>4.9 (20)</span>
                </div>
                <div>
                  <span>$34/night</span>
                </div>
                <div>
                  <span>$167 total</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-none mb-8 pr-10 card-side bg-base-100">
            <figure>
              <img src={image2} className="w-72" alt="hotel" />
            </figure>
            <div className="card-body pl-4 p-0 text-start">
              <h2 className="card-title">
                Light bright airy stylish apt & safe peaceful stay
              </h2>
              <p>4 guests 2 bedrooms 2 beds 2 baths</p>
              <p>Wif Air conditioning Kitchen</p>
              <p>Cancellation fexibility availiable</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-warning mr-2"></FaStar>
                  <span>4.9 (20)</span>
                </div>
                <div>
                  <span>$34/night</span>
                </div>
                <div>
                  <span>$167 total</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-none pr-10 card-side bg-base-100">
            <figure>
              <img src={image3} className="w-72" alt="hotel" />
            </figure>
            <div className="card-body pl-4 p-0 text-start">
              <h2 className="card-title">
                Light bright airy stylish apt & safe peaceful stay
              </h2>
              <p>4 guests 2 bedrooms 2 beds 2 baths</p>
              <p>Wif Air conditioning Kitchen</p>
              <p>Cancellation fexibility availiable</p>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-warning mr-2"></FaStar>
                  <span>4.9 (20)</span>
                </div>
                <div>
                  <span>$34/night</span>
                </div>
                <div>
                  <span>$167 total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="google-map flex justify-center  w-1/2">
          <img className="" src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
