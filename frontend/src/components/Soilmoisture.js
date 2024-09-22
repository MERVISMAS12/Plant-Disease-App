import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, get, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiCcCdQ1vLKl5zXlvDn1NqSfEwA14dA4k",
  authDomain: "krishi-samrudhi-4cc7f.firebaseapp.com",
  databaseURL: "https://krishi-samrudhi-4cc7f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "krishi-samrudhi-4cc7f",
  storageBucket: "krishi-samrudhi-4cc7f.appspot.com",
  messagingSenderId: "982399033679",
  appId: "1:982399033679:web:3ecac6b195f65e1f7be53a"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const SoilMoistureForm = () => {
  const [soilMoisture, setSoilMoisture] = useState(0); // Soil moisture state
  const [temperature, setTemperature] = useState('');   // Temperature state
  const [humidity, setHumidity] = useState('');         // Humidity state

  // Fetch data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(database);
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSoilMoisture(data.Sensor?.soilmoisture || 0);   // Update soil moisture
          setTemperature(data.Temp_Hum?.Temperature || '');  // Update temperature
          setHumidity(data.Temp_Hum?.Humidity || '');        // Update humidity
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate the percentage based on soil moisture value (0-60)
  const soilMoisturePercentage = (soilMoisture / 60) * 100;

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-center text-green-700">Soil Moisture Monitor</h2>

      {/* Circular Gauge for Soil Moisture */}
      <div className="flex justify-center items-center">
        <div className="w-48 h-48">
          <CircularProgressbar
            value={soilMoisturePercentage}
            text={`${Math.round(soilMoisturePercentage)}%`}
            styles={buildStyles({
              textColor: '#38a169', // Green text
              pathColor: '#9ae6b4', // Light green for path
              trailColor: '#e6fffa', // Very light green background
            })}
          />
        </div>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* Soil Moisture Input */}
        <div className="flex justify-between items-center">
          <label htmlFor="soil-moisture" className="text-green-600">Soil Moisture</label>
          <input
            type="number"
            id="soil-moisture"
            value={soilMoisture}
            onChange={(e) => setSoilMoisture(e.target.value)}
            className="border border-green-300 rounded-md p-2 w-1/3 shadow-md focus:ring-green-400 focus:border-green-500"
            placeholder="0 - 60"
          />
        </div>

        {/* Temperature Input */}
        <div className="flex justify-between items-center">
          <label htmlFor="temperature" className="text-green-600">Temperature (°C)</label>
          <input
            type="number"
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="border border-green-300 rounded-md p-2 w-1/3 shadow-md focus:ring-green-400 focus:border-green-500"
            placeholder="Enter Temperature"
          />
        </div>

        {/* Humidity Input */}
        <div className="flex justify-between items-center">
          <label htmlFor="humidity" className="text-green-600">Humidity (%)</label>
          <input
            type="number"
            id="humidity"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            className="border border-green-300 rounded-md p-2 w-1/3 shadow-md focus:ring-green-400 focus:border-green-500"
            placeholder="Enter Humidity"
          />
        </div>
      </form>
    </div>
  );
};

export default SoilMoistureForm;
