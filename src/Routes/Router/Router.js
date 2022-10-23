import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Booking from "../../Pages/Booking/Booking";
import Home from "../../Pages/Home/Home";
import Hotels from "../../Pages/Hotels/Hotels";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'booking',
        element: <Booking></Booking>
      },
      {
        path: 'hotels',
        element: <PrivetRoute><Hotels></Hotels></PrivetRoute>
      },
      
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: '*',
    element: <div className="text-4xl mt-14">Page not found <span className="text-red-500 font-bold">404</span></div>
  }
])