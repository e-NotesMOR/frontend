import React,{useState} from 'react'
// import model from '../Models/model'
// import SideButtons from './SideButtons'
import DropdownItem from './DropdownItem'
import Contentdropdown from './Contentdropdown'
// import { list } from '../Models/list'
// import {subjectlist } from '../Models/subjectlist'

function Room({name , roomDetails , parenticon}) {
  const currentUser = localStorage.getItem('userId');
  // eslint-disable-next-line
  const [userId, setUserId] = useState(currentUser);

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
                  <DropdownItem title={item.title} id={item._id} parenticon={parenticon}>
                    <div className="btnextraroom">
                      {   
                        item.children.filter((room)=> room.members.some((item)=> 
                              Object.values(item).includes(userId) 
                          )).map((child,i) => (
                        <Contentdropdown title={child.title} key={i} id={child._id}/>
                        ))
                      }
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