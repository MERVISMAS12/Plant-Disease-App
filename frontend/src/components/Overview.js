import React from 'react';
import LeafCard from "./LeafCard"
import { RiSearch2Line } from "react-icons/ri";

const Overview = () => {
  return (
    <div className="w-full h-auto my-52 flex flex-col items-center justify-items-start">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900">Overview</h1>
      <p className="mt-8 w-9/12 text-gray-500 text-lg text-center">Identify whether their plant leaves are infected by pests or diseases. With an intuitive interface, users can easily upload photos, which the app analyzes using advanced machine learning algorithms.</p>
      <div className='w-9/12 mt-6 flex items-center justify-around'>
      <div className='group card h-60 w-48 border-2 border-dashed flex flex-col items-center justify-center hover:border-green-700 rounded-2xl'>
        <RiSearch2Line className='text-3xl text-gray-500 group-hover:text-green-700'/>
        <p className='text-[20px] text-gray-500 text-lg text-center group-hover:text-green-700'>Start diagnosing</p>
      </div>
      <LeafCard
        image="https://blossomplant.com/assets/images/img_disease_2-1.webp" // Add your image link here
        label="Overwatering"
      />
      <LeafCard
        image="https://blossomplant.com/assets/images/img_disease_2-2.webp" // Add your image link here
        label="Overwatering"
      />
      <LeafCard
        image="https://blossomplant.com/assets/images/img_disease_2-3.webp" // Add your image link here
        label="Overwatering"
      />     
      </div>
    </div>
  )
};

export default Overview;