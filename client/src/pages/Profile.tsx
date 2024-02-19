// ProfileContent.js
import { Card } from "@/components/Ui_elements/ContainerScroll";
import { Input } from "@mui/material";
import React, { useState } from "react";

const ProfileContent = () => {
  const [state, setState] = useState(1);
  const handleClick = (val: number) => {
    console.log(state);
    setState(val);
  };

  return (
    <>
      <div style={{ position: "fixed", top: 100, width: "100%", zIndex: 999 }}>
        <div className="flex flex-row bg-blue justify-evenly items-center text-white w-[90%] m-auto rounded-xl p-3 text-xs md:text-xl  ">
          <h1
            className="cursor-pointer bg-blue "
            onClick={() => handleClick(1)}
          >
            Name Section
          </h1>
          <h1 className="cursor-pointer bg-blue" onClick={() => handleClick(2)}>
           My List
          </h1>
          <h1 className="cursor-pointer bg-blue" onClick={() => handleClick(3)}>
            Skills Section
          </h1>
          <h1 className="cursor-pointer bg-blue" onClick={() => handleClick(4)}>
            Contact Section
          </h1>
        </div>
        <div
          style={{ height: "500px" }}
          className={
            state === 1
              ? "visible bg-blue   p-5 flex flex-col justify-center items-center gap-4 min-h-full  w-[90%] m-auto rounded-xl  "
              : "hidden"
          }
        >
          <h1 className="text-5xl bg-blue text-white">Hello User</h1>
          <div className="flex flex-row gap-9 bg-blue">
            <label className="text-xl bg-blue text-white" htmlFor="name">Name</label>
            <Input
              id="name"
              className="w-100 "
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-row gap-9 bg-blue">
            <label className="text-xl bg-blue text-white"  htmlFor="pass">Password</label>
            <Input
              id="pass"
              
              className="w-100 "
              type="password"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div
          style={{ height: "500px" }}
          className={
            state === 2
              ? "visible bg-blue   p-5 flex flex-col justify-center items-center gap-4 min-h-full  w-[90%] m-auto rounded-xl  "
              : "hidden"
          }
        >
         <Card />
          
        </div>
      </div>
    </>
  );
};

export default ProfileContent;
