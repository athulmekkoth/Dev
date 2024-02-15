import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  link: string;
  name: string;
  color:string;
};

const Button = ({ link, name,color }: ButtonProps) => {
  return (
    <Link to={link}>
     
        <button style={{backgroundColor:`${color}`,borderRadius:"60px"}} className=" p-2  rounded-xl  text-white "> {name}</button>
      
    </Link>
  );
};

export default Button;
