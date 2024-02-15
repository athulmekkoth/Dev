import React from "react";
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar/Navbar";

const Homepage = () => {
  const user = useSelector((state: RootState) => state.user.users);
  console.log(user);
  return (
    <div>
      <div className="w-100 flex flex-col sm:w-100 md:flex-row  justify-between items-stretch mt-5 pr-3 pl-3">
        <div className="w-4/6  ">
          <img style={{ height: "300" }} src="/logo.svg" alt="s" />
        </div>
        <div className="bg-red-500 w-100 md:w-2/6 p-3">
          <p
          id="shine"
            style={{ height: "400" }}
            className="bg-red-500 font-bold text-xl md:text-3xl lg:text-5xl text-white tracking-wider"
            
          >
            Dive into our curated reading list, your hub for inspiration and
            amusement! Explore a handpicked selection of ideas that are as
            entertaining as they are enlightening. Whether you're seeking 
            a spark of <span  className="text-blue bg-red-500 text-xl md:text-3xl lg:text-5xl">innovation,</span> our
            collection has something for everyone.{" "}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;
