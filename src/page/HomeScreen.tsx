import img from "../assets/digital 10.svg";
import { FaDroplet } from "react-icons/fa6";
import pix1 from "../assets/image1.svg";
import { FaArrowRight } from "react-icons/fa";
import pix2 from "../assets/image2.svg";
import pix from "../assets/image3.svg";
import pix3 from "../assets/digital 4.svg";
const HomeScreen = () => {
  return (
    <div>
      <div className="w-full h-[89vh] bg-slate-400 relative">
        <img src={img} alt="" className="object-cover w-full h-[100%]" />
        {/* <div className="bg-black absolute top-0 left-0 w-full h-full opacity-10 flex justify-center items-center"></div> */}
        <div className="font-[700] text-[white] top-0 left-0 w-full h-full absolute flex items-center justify-center  flex-col">
          <div>
            <FaDroplet className="text-white text-[70px]" />
          </div>

          <div className="w-[55%] h-[35%]">
            <h1 className="text-[48px] text-center">
              Virtual machines anyone can set up in seconds
            </h1>
            <p className="text-center text-[15px]">
              Get dependable uptime with our 99.99% SLA, simple security tools,
              and predictable monthly pricing with DigitalOcean's virtual
              machines, called Droplets.
            </p>
          </div>
          <div className="w-[60%] h-[20%] flex items-start justify-center">
            <button className="w-[150px] h-[45px] bg-white text-black rounded-3xl">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[90vh] flex justify-center items-center">
        <div className="w-[70%] h-[90%]   rounded-md flex flex-col">
          <div className="w-full h-[13%] flex items-center justify-center mb-3">
            <h1 className="text-[30px] font-bold">
              Comprehensive, cost-effective cloud computing
            </h1>
          </div>
          <div className="flex justify-between">
            <div className="rounded-md w-[30%] h-[65vh] ">
              <div className="border rounded-md w-full h-[38%] mb-2">
                <img
                  src={pix1}
                  alt="img"
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="w-full h-[30vh]  rounded-md ">
                <h1 className="font-bold text-[25px] mb-2 ">
                  Easily deploy and manage your Droplets
                </h1>
                <p className="text-gray">
                  Interact with your Droplets how you want. Our intuitive UI,
                  CLI, API, and Terraform Provider make it simple to manage your
                  virtual machines.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-bold">Read more</p>
                <FaArrowRight />
              </div>
            </div>
            <div className="rounded-md w-[30%] h-[65vh] ">
              <div className="border rounded-md w-full h-[38%] mb-2">
                <img
                  src={pix2}
                  alt="img"
                  className="w-full h-full rounded-md"
                />
              </div>
              <div className="w-full h-[30vh]  rounded-md ">
                <h1 className="font-bold text-[25px] mb-2 ">
                  Reliably scale as your demand shifts
                </h1>
                <p className="text-gray">
                  Resize a Droplet or scale horizontally with many of them.
                  Deploy across globally distributed data centers each with our
                  99.99% uptime SLA.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-bold">Learn how</p>
                <FaArrowRight />
              </div>
            </div>
            <div className="rounded-md w-[30%] h-[65vh] ">
              <div className="border rounded-md w-full h-[38%] mb-2">
                <img src={pix} alt="img" className="w-full h-full rounded-md" />
              </div>
              <div className="w-full h-[30vh]  rounded-md ">
                <h1 className="font-bold text-[25px] mb-2 ">
                  Build and monitor, and secure your apps for less
                </h1>
                <p className="text-gray">
                  Get exceptional bandwidth pricing and 500 GiB per month of
                  outbound data transfer—plus monitoring and firewalls—for free
                  with every Droplet.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="font-bold">View our pricing</p>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] bg-slate-100 flex items-center justify-center">
        <div className="w-[80%] h-[80%] bg-white rounded-xl border flex justify-between shadow-inner">
          <div className="w-[55%] h-full">
            <h1 className="mt-10 font-bold text-[30px] ml-10 mb-2">
              Forrester TEI report finds <br />
              DigitalOcean delivers 50% savings and 186% ROI
            </h1>
            <p className="ml-10 text-[18px] mb-5 ">
              Cut cloud computing costs by 50%, enhance productivity, and
              achieve 186% ROI by running your business on DigitalOcean instead
              of hyperscalers. Explore Forrester's Total Economic ImpactTM Study
              of DigitalOcean to see how startups & SMBs are unlocking the power
              of cloud computing.
            </p>

            <div className="flex gap-2">
              <p className="ml-10 font-bold">Download study</p>
              <span>
                {" "}
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="w-[40%] h-full  ">
            <img
              className="w-full h-full object-cover rounded-r-xl shadow-inner"
              src={pix3}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
