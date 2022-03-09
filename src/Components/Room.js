import React,{useEffect} from 'react'
// import model from '../Models/model'
// import SideButtons from './SideButtons'
import DropdownItem from './DropdownItem'
import Contentdropdown from './Contentdropdown'
// import { list } from '../Models/list'
// import {subjectlist } from '../Models/subjectlist'

function Room({name , roomDetails}) {

  useEffect(() => {
    console.log(roomDetails)
  }, [roomDetails])
  
  return (
    <div>
        <div className="container ">
            <div className='SideTextsize '>
                {name}
            </div>

            <div className="roomsize ">
              <div className="mt-2">
              
              {roomDetails.map((item, i) => (
                <div key={i}>

                  <DropdownItem title={item.title} id={item._id}>
                    <div className="btnextraroom">
                      {item.children.map((child,i) => (
                      <Contentdropdown title={child.title} key={i} id={child._id}/>
                      ))}
                    </div>
                  </DropdownItem>

                  </div>
              ))}
            </div>
            </div>
        </div>

    </div>
  )
}

export default Room