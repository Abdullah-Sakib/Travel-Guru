import React, { useContext } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/Rectangle 1.png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Booking = () => {
  const { destination } = useContext(AuthContext);
  return (
    <div>
      <div className="hero">
        <img className="h-[100vh] w-full" src={background} alt="" />
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content max-w-[84rem]  text-neutral-content justify-between items-start p-0">
          <div className="w-1/2 py-10 pl-16 pr-3">
            <div className=" text-start mx-auto">
              <h1 className="mb-5 text-7xl font-bold font-serif">
                {destination.name}
              </h1>
              <p className="mb-5">
                {destination.description}
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="card flex-shrink-0 rounded-lg mx-auto w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Origin</span>
                  </label>
                  <input
                    type="text"
                    placeholder="origin"
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Destination</span>
                  </label>
                  <input
                    type="text"
                    placeholder="destination"
                    className="input input-bordered text-black"
                  />
                </div>

                <div className="flex justify-between">
                  <div className="form-control w-[48%] ">
                    <label className="label">
                      <span className="label-text">From</span>
                    </label>
                    <input
                      type="text"
                      placeholder="from"
                      className="input input-bordered text-black"
                    />
                  </div>

                  <div className="form-control w-[48%]">
                    <label className="label">
                      <span className="label-text">To</span>
                    </label>
                    <input
                      type="text"
                      placeholder="to"
                      className="input input-bordered text-black"
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <Link to='/hotels'>
                    <button className="btn btn-warning w-full rounded-md">
                      Start Booking
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
