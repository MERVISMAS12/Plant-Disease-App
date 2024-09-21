import './App.css';
import Body from "./components/Body"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.js";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <Body/>,
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
      {/* <h1 className='text-green-800 font-bold text-5xl'>Hello Everyone👋</h1> */}
      <Navbar/>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
