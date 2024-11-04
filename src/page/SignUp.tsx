import React from "react";
import pix from "../assets/logo.png";
import { Link } from "react-router-dom";
import pix2 from "../assets/goo-removebg-preview.png";
import pix3 from "../assets/github.png";

const signUp = () => {
  return (
    <div>
      <div className=" w-full h-[70px] flex justify-center ">
        <div className="w-[95%] h-[70px] flex justify-between">
          <div className=" w-[15%] h-[70px] flex items-center justify-center ">
            <img className="w-[80%] h-[80%]" src={pix} alt="image" />
          </div>
          <div
            className=" w-[20%] h-[70px] flex justify-center items-center
          "
          >
            Don't have an account? <Link to="/signin">signin</Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-full h-[600px] flex items-center justify-center mb-5 flex-col">
        <div className="bg-white w-[450px] h-[380px] border rounded-2xl mb-3">
          <h1 className="text-[30px] font-bold ml-8 mt-6 mb-4">
            Create your Account
          </h1>
          <p className="text-[15px] font-semibold text-gray-600 ml-8 mb-7">
            Start spending more time on your projects and less time managing
            your infrastructure.
          </p>

          <div className="flex flex-col">
            <button className="w-[350px] h-[45px] border rounded-lg flex items-center justify-center ml-10 gap-2 mb-4">
              <img className="w-[30px] h-[25px]" src={pix2} alt="image" />
              <p className="font-semibold"> sign in with Google</p>
            </button>
            <button className="w-[350px] h-[45px] border rounded-lg flex items-center justify-center ml-10 gap-2 mb-4">
              <img className="w-[30px] h-[25px]" src={pix3} alt="image" />
              <p className="font-semibold"> sign in with Github</p>
            </button>
            <button className="w-[350px] h-[45px] bg-blue-700 text-white rounded-lg ml-10 font-semibold">
              sign up with email
            </button>
          </div>
        </div>
        <p>
          By signing up you agree to the Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default signUp;
