import React, { useState } from "react";

const registerScreen = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="w-full h-screen flex  justify-center items-center">
      <div>
        <form className="flex flex-col items-center">
          <div className="flex flex-col mb-5">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border rounded-lg w-[400px] h-[45px] pl-2"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label>password</label>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border rounded-lg w-[400px] h-[45px] pl-2"
            />
          </div>
          <button
            className="bg-slate-950 rounded-lg w-[400px] h-[45px] text-white font-semibold"
            onClick={() => {
              setToggle(true);
            }}
          >
            Log in{" "}
          </button>
          welcome {toggle && name}
        </form>
      </div>
    </div>
  );
};

export default registerScreen;
