import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import './../Css/SideNav.css'
import SideButtons from './SideButtons';
import ModalSearch from './ModalSearch';
import Room from './Room';
import ModalForm from './ModalForm';
import { fakedata } from './../Models/fakedata'


function Sidenavbar({name,id}) {

const [userId, setUserId] = useState("6225f4d6d3342c3921e304d8");
const [personalRooms, setPersonalRooms] = useState(null);
const [publicRooms, setPublicRooms] = useState(null);

useEffect(() => {

    let myRooms = fakedata.filter((room)=> room.childrenOf === null && room.members.filter((item)=> 
        Object.values(item).includes(userId) 
    ));

    let personalUserRooms = myRooms.filter((room) => room.members.length === 1)

    let publicUserRooms = myRooms.filter((room) => room.members.length > 1)
    setPersonalRooms(personalUserRooms)
    setPublicRooms(publicUserRooms)

},[userId])


  return (
    <>
         <nav className='sidenavbar'>
                <div className='SideTextsize  container-fluid'>
                    <div className='row mt-4 '>
                        <div className='col-2 px-2'>
                            <FaUserCircle className='FaIconSize ' />
                        </div>
                        <div className='col-10 Textdesign'>
                            {name} 
                        </div>
                    </div>
                </div>

                <div className='my-4'>
                    <ModalSearch text={"Search"} />
                </div>
            <div className='roomcontent'>

                {publicRooms !== null ? <Room name={"Rooms"} roomDetails={publicRooms}/> : ""}
                {personalRooms !== null ? <Room name={"Personal"} roomDetails={personalRooms}/> : ""}
                
            </div>
            <div class=" row "> 
                <hr class="text-dark "/>

                <div className='my-1'>
                    
                    <ModalForm text={"Join or Create"} />
                </div>
                <div className='my-1'>
                    <SideButtons text={"Logout"} path={"/"} />
                </div>
            </div>
        </nav>

    
    </>
  )
}

export default Sidenavbar