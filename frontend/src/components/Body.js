import CropRecommendation from "./CropRecommendation.js";
import DiagnoseNow from "./DiagnoseNow.js";

function Body() {
  return (
    <div>
      {/* <h1 className='text-green-800 font-bold text-5xl'>Hello Everyone👋</h1> */}
      <DiagnoseNow />

      {/* add below components of home page */}
      <CropRecommendation />
    </div>
  );
}

export default Body;
