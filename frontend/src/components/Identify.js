import React, { useState, useEffect } from 'react';

const Identify = () => {
  const [activePoint, setActivePoint] = useState(0);

  // Array of images for each point
  const images = [
    'https://blossomplant.com/assets/images/img_pl_5-6.webp',
    'https://blossomplant.com/assets/images/img_pl_5-6.webp',
    'https://blossomplant.com/assets/images/img_disease_2-1.webp',
    'https://blossomplant.com/assets/images/img_disease_2-2.webp',
    'https://blossomplant.com/assets/images/img_disease_2-3.webp'
  ];

  // Sequential highlighting
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePoint(prevPoint => (prevPoint + 1) % 5);
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handlePointClick = (index) => {
    setActivePoint(index); // Manually set the clicked point
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left Side: Image */}
      <div className='w-1/2 flex items-center justify-center'>
        <div className='w-1/2 h-full'>
          <img className='w-full h-full object-cover rounded-2xl' src={images[activePoint]} alt="Disease identification step" />
        </div>      
      </div>

      {/* Right Side: Title, Sub-points, and Button */}
      <div className="flex-1 flex flex-col justify-center px-12 bg-white">
        <h2 className="text-5xl font-bold mb-4 text-green-700">How to identify a disease</h2>

        <ul className="space-y-6 mt-5">
          {[
            '1. Open Blossom and tap the camera button in the Plant Health tab',
            '2. Place your sick plant at the center of the frame',
            '3. Snap photos of the diseased parts of a leaf or multiple leaves',
            '4. Answer a couple of questions from our bot',
            '5. That’s it! Now you know the issue and how to cure it'
          ].map((point, index) => (
            <li
              key={index}
              onClick={() => handlePointClick(index)}
              className={`cursor-pointer transition-opacity duration-300 ${activePoint === index ? 'text-xl opacity-100 text-green-700 font-bold' : 'text-xl opacity-30'}`}
            >
              {point}
            </li>
          ))}
        </ul>

        <button className="w-1/2 text-2xl mt-8 py-2 px-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg">
          Diagnose Now
        </button>
      </div>
    </div>
  );
};

export default Identify;