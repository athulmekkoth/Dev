import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const data = [
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
    { name: "About", link: "/about" }
  ];

  return (
    <nav className="flex flex-row justify-between ">
     <div>SuperIdeas</div>

     <div>
     {data && data.map((item, index) => (
        <span key={index}><Link to={item.link}>{item.name}</Link></span>
      ))}
     </div>

      <div>Login</div>
    </nav>
  );
};
