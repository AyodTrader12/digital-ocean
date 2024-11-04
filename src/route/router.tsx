import { createBrowserRouter, Outlet } from "react-router-dom";
import HomeScreen from "../page/HomeScreen";
import Signin from "../page/SignIn";
import SignUp from "../page/SignUp";
import RegisterScreen from "../page/RegisterScreen";
import Clock from "../page/clock";
import Layout from "../static/Layout";
import LandingPage from "../page/LandingPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/clock",
    element: <Clock />,
  },
  {
    path: "/landingpage",
    element: <LandingPage />,
  },
]);
