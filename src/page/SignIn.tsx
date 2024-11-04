import React from "react";
import pix from "../assets/logo.png";
import pix2 from "../assets/goo-removebg-preview.png";
import pix3 from "../assets/github.png";
import { Link } from "react-router-dom";
import pix4 from "../assets/imd.png";

const signIn = () => {
  return (
    <div>
      <div className=" w-full h-[70px] flex justify-center ">
        <div className="w-[95%] h-[70px] flex justify-between">
          <div className=" w-[15%] h-[70px] flex items-center justify-center ">
            <img className="w-[80%] h-[80%] " src={pix} alt="image" />
          </div>
          <div
            className=" w-[20%] h-[70px] flex justify-center items-center
          "
          >
            Don't have an account? <Link to="/signup">signup</Link>
          </div>
        </div>
      </div>
      <main className="flex gap-10 bg-slate-100 h-[650px]">
        <div className="w-[700px]  flex items-center justify-center">
          <div className="w-[450px] h-[500px] rounded-xl bg-white mt-20">
            <h1 className="font-bold text-[30px] text-center mt-4">
              Log in to your Account
            </h1>
            <form className="flex flex-col">
              <div className="flex flex-col mb-4">
                <label className="text-[20px] ml-10 text-blue-500 ">
                  email
                </label>
                <input
                  placeholder="Enter your email Address"
                  type="email"
                  className="w-[350px] h-[45px] border rounded-lg ml-10 pl-2 "
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-[20px] ml-10 text-blue-500 ">
                  password
                </label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  className="w-[350px] h-[45px] border rounded-lg ml-10 pl-2 "
                />
              </div>
              <div className="mb-4">
                <Link to="/">
                  <button className="bg-blue-700 rounded-lg w-[350px] h-[45px] ml-10 text-white font-semibold ">
                    {" "}
                    Log In
                  </button>
                </Link>
              </div>
              <hr className=" w-[80%] mb-4 flex justify-center items-center ml-8" />
              <div className="flex flex-col">
                <button className="w-[350px] h-[45px] border rounded-lg flex items-center justify-center ml-10 gap-2 mb-4">
                  <img className="w-[30px] h-[25px]" src={pix2} alt="image" />
                  <p className="font-semibold"> sign in with Google</p>
                </button>
                <button className="w-[350px] h-[45px] border rounded-lg flex items-center justify-center ml-10 gap-2 mb-4">
                  <img className="w-[30px] h-[25px]" src={pix3} alt="image" />
                  <p className="font-semibold"> sign in with Github</p>
                </button>
              </div>
            </form>
            <p className="text-blue-700 ml-10">Forgot password?</p>
          </div>
        </div>
        <div className="">
          <img className="w-[700px] h-full ml-20" src={pix4} alt="img" />
        </div>
      </main>
    </div>
  );
};

export default signIn;
