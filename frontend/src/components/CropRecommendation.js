
const CropRecommendation = () => {
  return (
    <div className="bg-white p-8 rounded-md mt-40 shadow-lg">
      <h2 className="text-green-900 text-xl text-center font-semibold mb-4">
        Crop Recommendation
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-green-500">Nitrogen Content</label>
          <input
            type="text"
            value="90"
            className="border border-gray-300 rounded-md p-2 text-gray-500 w-1/3 shadow-md"
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-green-500">Phosphate Content</label>
          <input
            type="text"
            value="42"
            className="border border-gray-300 rounded-md p-2 text-gray-500 w-1/3 shadow-md"
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-green-500">Potassium Content</label>
          <input
            type="text"
            value="43"
            className="border border-gray-300 rounded-md p-2 text-gray-500 w-1/3 shadow-md"
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-green-500">Temperature</label>
          <input
            type="text"
            value="20"
            className="border border-gray-300 rounded-md p-2 text-gray-500 w-1/3 shadow-md"
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-green-500">pH</label>
          <input
            type="text"
            value="82"
            className="border border-gray-300 rounded-md p-2 text-gray-500 w-1/3 shadow-md"
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-green-500">Humidity</label>
          <input
            type="text"
            value="6.5"
            className="border border-gray-300 rounded-md p-2 text-gray-500 w-1/3 shadow-md"
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-green-500">Rainfall</label>
          <input
            type="text"
            value="202"
            className="border border-gray-300 rounded-md p-2 text-gray-500 w-1/3 shadow-md"
            readOnly
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-green-500">Recommended Crop</label>
          <input
            type="text"
            value="Rice"
            className="border border-gray-300 rounded-md p-2 text-gray-500 w-1/3 shadow-md"
            readOnly
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="items-center px-10 py-2.5 mt-5 font-bold text-white bg-gradient-to-r from-green-400 to-green-600 rounded-3xl hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-green-700 shadow-lg"
          style={{
            fontFamily: "Raleway, sans-serif",
          }}
        >
          Recommend Now
        </button>
      </div>
    </div>
  );
};

export default CropRecommendation;
