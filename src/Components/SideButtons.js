import React from 'react'
import { Link } from 'react-router-dom'
import './../Css/SideNav.css'

function SideButtons({icon,text,path}) {
  return (
    <div>
        <Link to={path} type="submit" className="btn btn-primary p-1 navbutton" >
         {icon}  {text}
        </Link>
    </div>
  )
}

export default SideButtons