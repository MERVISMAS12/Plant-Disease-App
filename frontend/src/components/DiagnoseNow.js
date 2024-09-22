import React from "react";

const DiagnoseNow = () => {
  return (
    <section className="bg-white py-16 px-6 mb-28 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
      {/* Left side - Image with plant */}
      <div className="relative flex-1 lg:max-w-[50%] flex justify-center lg:justify-start">
        <div className="absolute bottom-0 left-24 w-72 -top-28 bg-white rounded-lg lg:block hidden"> {/* Changed here */}
          <div className="flex items-center gap-4 w-[400px]">
            <img
              src="/assets/images/img_disease_1.webp" // Replace with the sick plant image
              alt="Sick plant"
              className="w-15.5 h-17.5 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right side - Text content */}
      <div className="flex-1 lg:max-w-[50%] text-center lg:text-left mt-8 lg:mt-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">
          Identify and cure{" "}
          <span className="text-green-500">plant diseases</span> with Krishi Samriddhi
        </h2>
        <p className="mt-8 text-gray-500 text-lg">
          Is your green buddy dying? Try the Blossom app to identify the cause
          and get extensive disease and care info in a snap.
        </p>
        <button className="mt-6 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-lg text-lg">
          Diagnose Now
        </button>
      </div>
    </section>
  );
};

export default DiagnoseNow;
