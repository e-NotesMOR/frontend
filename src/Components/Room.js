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
        <div class="container ">
            <div className='SideTextsize '>
                {name}
            </div>

            <div class="roomsize ">
              <div class="mt-2">
              
              {roomDetails.map((item, i) => (
        
                    // console.log(item)
                <div key={i}>

                  <DropdownItem title={item.title} id={item._id}>
                    <div class="btnextraroom">
                      {item.children.map(child => (
                      <Contentdropdown title={child.title} id={child._id}/>
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