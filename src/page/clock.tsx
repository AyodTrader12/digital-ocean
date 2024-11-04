import { useState } from "react";

const clock = () => {
  const [sec, setsec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen  flex-col">
        <div className="border rounded-md w-[500px] h-[200px] flex items-center justify-center mb-6">
          <div className="border rounded-md w-[80%] h-[80%] flex gap-10 items-center justify-center">
            <p>{sec}</p>
            <p>{min}</p>
            <p>{hr}</p>
          </div>
        </div>
        <div>
          <button className="bg-green-600 rounded-md h-[45px] w-[400px] text-white">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default clock;
