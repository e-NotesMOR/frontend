import React from 'react'
import './../Css/option.css'
import {FaEllipsisH, FaTrash,FaRegClipboard, FaSignOutAlt} from 'react-icons/fa'
import DropButtons from './DropButtons'

function Settingoption() {
  return (
    <div>
            <div className="dropdown-container" tabIndex="-1">
                <FaEllipsisH style={{fontSize:"1.5rem"}}/>
                <div className="dropdown">
                    <DropButtons text={"Leave"} icon={<FaSignOutAlt/>} />
                    <DropButtons text={"Delete"} icon={<FaTrash/>}/>
                    <DropButtons text={"Get Code"} icon={<FaRegClipboard/>}/>
                </div>
            </div>
    </div>
  )
}

export default Settingoption