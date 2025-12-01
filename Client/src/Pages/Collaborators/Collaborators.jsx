import React from "react";

const Collaborators = () => {
  return (
    <div className="my-5 px-6">
      <h1 className="text-center py-5 text-2xl font-semibold">
        Our Collaborators
      </h1>

      <div
        className="grid gap-6 py-10
               grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
               place-items-center"
      >
        <div
          className="w-85 h-60 opacity-60 bg-white rounded-xl shadow-lg
                 transition duration-300 ease-in-out
                 hover:scale-105 hover:shadow-red-700
                 flex items-center justify-center"
        >
          <span className="text-gray-400 text-xl font-semibold">NCC</span>
        </div>

        <div
          className="w-100 h-60 bg-white rounded-xl shadow-lg
                 transition duration-300 ease-in-out
                 hover:scale-105 hover:shadow-red-700
                 flex items-center justify-center"
        >
          <span className="text-gray-900 text-xl font-semibold">NSS</span>
        </div>

        <div
          className="w-85 h-60 opacity-60 bg-white rounded-xl shadow-lg
                 transition duration-300 ease-in-out
                 hover:scale-105 hover:shadow-red-700
                 flex items-center justify-center"
        >
          <span className="text-gray-400 text-xl font-semibold">YMCA</span>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
