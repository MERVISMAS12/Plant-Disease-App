import CropRecommendation from "./CropRecommendation.js";
import DiagnoseNow from "./DiagnoseNow.js";
import ContactPage from "./ContactPage.js";
import Footer from "./Footer.js"
import { Outlet } from "react-router-dom";
import Overview from "./Overview.js";
import Identify from "./Identify.js";

function Homepage() {
  return (
    <div>
      <DiagnoseNow/>
      <Overview/>
      <Identify/>
      <ContactPage />
    </div>
  );
}

export default Homepage;
