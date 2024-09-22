import "./App.css";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage.js";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      // children : [
      //   {
      //     path : "/",
      //     element : <Maincontainer/>
      //   },
      //   {
      //     path : "/watch",
      //     element : <WatchPage/>
      //   },
      // ],
    },
  ]);

  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
