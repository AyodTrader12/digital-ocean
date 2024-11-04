import React from "react";
import Header from "../static/Header";
import pix from "../assets/screeenshot.png";

const LandingPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* heropage */}
      <div>
        <div className="w-full h-[90vh] bg-slate-50">
          <img className="w-full h-full" src={pix} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
