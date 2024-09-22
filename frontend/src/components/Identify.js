import React, { useState, useEffect } from 'react';

const Identify = () => {
  const [activePoint, setActivePoint] = useState(0);

  // Sequential highlighting
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePoint((prevPoint) => (prevPoint + 1) % 5);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handlePointClick = (index) => {
    setActivePoint(index); // Manually set the clicked point
  };

  return (
    <div className="flex h-screen">
      {/* Left Side: Three Images */}
      <div className="relative flex-1 overflow-hidden">
        <img
          src="https://blossomplant.com/assets/images/img_disease_3-5.webp"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
          style={{ transform: 'translateX(-30%)' }} // Left image with low opacity
        />
        <img
          src="https://blossomplant.com/assets/images/img_disease_3-5.webp"
          alt="Partially visible right leaf"
          className="absolute top-0 right-0 w-full h-full object-cover opacity-10"
          style={{ transform: 'translateX(30%)' }} // Right image with low opacity
        />
        <img
          src="https://blossomplant.com/assets/images/img_disease_3-5.webp"
          className="relative w-full h-full object-cover" // Center image with full opacity
        />
      </div>

      {/* Right Side: Title, Sub-points, and Button */}
      <div className="flex-1 flex flex-col justify-center px-12 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-green-700">How to identify a disease</h2>

        <ul className="space-y-4">
          {[
            'Open Blossom and tap the camera button in the Plant Health tab',
            'Place your sick plant at the center of the frame',
            'Snap photos of the diseased parts of a leaf or multiple leaves',
            'Answer a couple of questions from our bot',
            'That’s it! Now you know the issue and how to cure it',
          ].map((point, index) => (
            <li
              key={index}
              onClick={() => handlePointClick(index)}
              className={`cursor-pointer transition-opacity duration-300 ${
                activePoint === index ? 'opacity-100 text-green-700 font-bold' : 'opacity-30'
              }`}
            >
              {point}
            </li>
          ))}
        </ul>

        <button className="mt-8 py-2 px-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg">
          Diagnose Now
        </button>
      </div>
    </div>
  );
};

export default Identify;
