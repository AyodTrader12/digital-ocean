import pix from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className=" w-full h-[70px] flex items-center justify-center">
        <div className="bg-white w-[90%] h-[70px] flex justify-between">
          <div className=" w-[20%] h-full flex items-center justify-center ">
            <img src={pix} alt="logo" className="w-[90%] h-[90%]" />
          </div>
          <div className="flex gap-10 items-center">
            <nav className="font-semibold">products</nav>
            <nav className="font-semibold">solutions</nav>
            <nav className="font-semibold">Developers</nav>
            <nav className="font-semibold">pricing</nav>
            <nav className="font-semibold">partners</nav>
          </div>
          <div className="w-[20%] h-full flex gap-2 items-center">
            <Link to="/signin">
              <button className="rounded-lg w-[120px] h-[45px] font-semibold">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="rounded-3xl w-[120px] h-[45px] bg-blue-600 text-white font-semibold">
                sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
