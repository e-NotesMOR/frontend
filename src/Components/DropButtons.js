import React from 'react'
import '../Css/option.css'
function DropButtons({text,icon,handleClick}) {
  return (
    <div>
        <button className="btn p-1 buttonDrop" onClick={handleClick}>
         {icon} {text}
        </button>
    </div>
  )
}

export default DropButtons