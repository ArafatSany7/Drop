import React from "react";
import { Heart, Search } from "lucide-react";
import { CiSquarePlus } from "react-icons/ci";
import { BsSearchHeart } from "react-icons/bs";
import { IoCall } from "react-icons/io5";

const HowToGetBlood = () => {
  return (
    <div className="justify-center items-center">
      <section className="w-full py-20 flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl md:text-5xl font-extrabold text-center mb-6 text-white">
          How It Works
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mb-14 text-sm md:text-base">
          A simple three-step process that connects you to lifesaving blood in
          moments.
        </p>

        <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
          {/* Step 1 */}
          <div className="rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center border transition duration-300 ease-in-out hover:scale-105 hover:shadow-red-700">
            <CiSquarePlus size={50} />
            <h3 className="text-lg font-semibold mb-2">Register Account</h3>
            <p className="text-gray-600 text-sm">
              Sign up quickly and join a community built to save lives every
              day.
            </p>
          </div>

          {/* Step 2 */}
          <div className=" rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center border  transition duration-300 ease-in-out hover:scale-105 hover:shadow-red-700">
            <BsSearchHeart size={50} />
            <h3 className="text-lg font-semibold mb-2">Find Blood</h3>
            <p className="text-gray-600 text-sm">
              Search by blood group, location, or emergency availability
              instantly.
            </p>
          </div>

          {/* Step 3 */}
          <div className=" rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center border transition duration-300 ease-in-out hover:scale-105 hover:shadow-red-700">
            <IoCall size={50} />
            <h3 className="text-lg font-semibold mb-2">Contact Donor</h3>
            <p className="text-gray-600 text-sm">
              Reach the donor directly and get help as fast as possible.
            </p>
          </div>
        </div>

        {/* Heartbeat */}
        <div className="mt-16 w-full max-w-2xl flex flex-col items-center">
          <svg
            viewBox="0 0 500 100"
            className="w-full mb-4"
            preserveAspectRatio="none"
          >
            <path
              d="M0 50 Q 40 10 80 50 T 160 50 T 240 50 Q 260 20 280 50 T 360 50 T 440 50 Q 460 10 500 50"
              fill="transparent"
              stroke="red"
              strokeWidth="4"
            />
          </svg>
          <Heart className="w-12 h-12 text-red-600" />
        </div>
      </section>
    </div>
  );
};

export default HowToGetBlood;
