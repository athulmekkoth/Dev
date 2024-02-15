import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({link:string,name:string}) => {
  return (
  <Link to={link}><button>{name}</button></Link>
  )
}

export default Button