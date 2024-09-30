import { FaHome, FaDollarSign, FaStar } from "react-icons/fa";

interface Links {
  name: string;
  link: string;
  icon?: JSX.Element; // Optional icon property
}

export const navItems: Links[] = [
  { name: "Features", link: "/features", icon: <FaHome /> }, 
  { name: "Pricing", link: "/pricing", icon: <FaDollarSign /> },
  { name: "Testimonials", link: "/testimonials", icon: <FaStar /> },
];
