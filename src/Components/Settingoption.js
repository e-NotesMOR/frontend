import React from 'react'
import './../Css/option.css'
import {FaEllipsisH, FaTrash,FaRegClipboard, FaSignOutAlt, FaExclamationTriangle} from 'react-icons/fa'
import DropButtons from './DropButtons'
import ModalReport from './ModalReport'

function Settingoption() {
  return (
    <div>
            <div class="dropdown-container" tabindex="-1">
                <FaEllipsisH style={{fontSize:"1.5rem"}}/>
                <div class="dropdown">
                    <DropButtons text={"Leave"} icon={<FaSignOutAlt/>} />
                    <DropButtons text={"Delete"} icon={<FaTrash/>}/>
                    <DropButtons text={"Get Code"} icon={<FaRegClipboard/>}/>
                    <ModalReport text={"Submit Report"} icon={<FaExclamationTriangle/>} />
                </div>
            </div>
    </div>
  )
}

export default Settingoption