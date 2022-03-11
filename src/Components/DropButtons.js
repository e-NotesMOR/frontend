import React from 'react'
import './../Css/SideNav.css'

function DropButtons({text,icon}) {
  return (
    <div>
        <button type="submit" className="btn btn-primary p-1 dropoption" >
         {icon} {text}
        </button>
    </div>
  )
}

export default DropButtons