import React from 'react'
import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";



const Homepage = () => {
  const user = useSelector((state: RootState) => state.user.users);
console.log(user)
  return (
<div>dd</div>
  )
}

export default Homepage