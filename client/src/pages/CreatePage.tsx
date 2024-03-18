import React from "react";
import { useState, useEffect } from "react";
import {
  MdPreview,
  MdSettings,
  MdSpaceDashboard,
  MdWifiProtectedSetup,
} from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { BsLightningChargeFill } from "react-icons/bs";
import Setting from "./Setting";
import Dashboard from "./Write";
import Write from "./Write";
const CreatePage = () => {
  const [index, setIndex] = useState<number>(0);
  const setvalue = (index: number) => {
    setIndex(index);
    console.log(index);
  };
  const setPage = (): JSX.Element | undefined => {
    if (index === 1) {
      return <Dashboard />;
    }
    if (index === 2) {
      return <Write />;
    }
    return undefined;
  };
  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  console.log(width);
  {
    width <= 769
      ? alert("you are watcjhing small size viewd best in mobile")
      : console.log("desktop");
  }

  return (
    <div className="flex flex-col lg:flex-row  gap-2 bg-bg">
      <div className=" min-h-full flex flex-row lg:flex-col   bg-white  p-8 rounded-xl ml-3  lg:min-h-[700px]  justify-between lg:w-[15%]  gap-8 text-center">
        <div
          className="sldiv"
          onClick={() => {
            setvalue(1);
          }}
        >
          <MdSpaceDashboard />
          <a>Dashbaord</a>
        </div>
        <div
          className="sldiv"
          onClick={() => {
            setvalue(2);
          }}
        >
          <FaPencilAlt />
          <a>write</a>
        </div>
        <div
          className="sldiv"
          onClick={() => {
            setvalue(3);
          }}
        >
          <VscGraphLine />
          <a>Grow</a>
        </div>
        <div
          className="sldiv bg-purple-50 p-5 flex-col "
          onClick={() => {
            setvalue(3);
          }}
        >
          <div className="flex flex-row justify-between items-center gap-3 text-purple-500">
            <BsLightningChargeFill />
            <h1 className="text-xl">Plan</h1>
          </div>
          <div className="text-purple-500">25/10000 subsribers</div>
          <progress className="bg-purple-500 mt-2" value={25} max={2500} />
        </div>
        <div
          className="sldiv"
          onClick={() => {
            setvalue(5);
          }}
        >
          <MdSettings />
          <a>Setting</a>
        </div>
        <div
          className="sldiv"
          onClick={() => {
            setvalue(6);
          }}
        >
          <MdPreview />

          <a>View Page</a>
        </div>
      </div>

      <div className="   w-[80%]"> {setPage()}</div>
    </div>
  );
};

export default CreatePage;
