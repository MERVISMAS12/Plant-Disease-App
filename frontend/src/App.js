import "./App.css";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage.js";
import CropRecommendation from "./components/CropRecommendation.js";
import DiagnoseNow from "./components/DiagnoseNow.js";
import Homepage from "./components/Homepage.js";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children : [
        {
          path : "/",
          element : <Homepage />
        },
        {
          path : "/croprecommendation",
          element : <CropRecommendation/>
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
