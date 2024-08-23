import React from "react";
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar/Navbar";
import {  Card, ContainerScroll } from "../components/Ui_elements/ContainerScroll";
import Homecard from "../components/CardHome/Homecard.tsx";
import Videodiv from "../components/VideoDiv/Videodiv.tsx";
import BasicTabs from "./BasicTabs.tsx";



const Homepage = () => {
  const users = [
    { name: 'John Doe', designation: 'Developer', image: 'john.jpg', badge: 'Gold' },
    { name: 'Jane Smith', designation: 'Designer', image: 'jane.jpg', badge: 'Silver' },
  
  ];
  const titleComponent = <h1>Your Title Here</h1>; 

  return (
    <div>
      <div className="w-100 flex flex-col sm:w-100 md:flex-row  justify-between items-center mt-5 ">
        <div className=" w-full flex justify-center">
          <img style={{ height: "300" }} src="/logo.svg" alt="s" />
        </div>
    
      </div>
      <ContainerScroll users={users} titleComponent={titleComponent} />

   <div className="w-100 flex flex-col gap-4 md:flex-row justify-evenly items-center"> 
   <Homecard />
    <Homecard />
    <Homecard />
    <Homecard />
   </div>
   <Videodiv />

    </div>
   
  );
};

export default Homepage;
