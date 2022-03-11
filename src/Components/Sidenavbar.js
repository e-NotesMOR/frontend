import React, { useEffect, useState } from 'react'
import { FaUserCircle, FaUsers , FaUserAlt } from "react-icons/fa";
import './../Css/SideNav.css'
import SideButtons from './SideButtons';
import ModalSearch from './ModalSearch';
import Room from './Room';
import ModalForm from './ModalForm';


import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sidenavbar({name,id}) {
// eslint-disable-next-line
const currentUser = localStorage.getItem('userId');
// eslint-disable-next-line
const [userId, setUserId] = useState(currentUser);
let backendUrl = process.env.REACT_APP_BACKEND_URL;

const [rooms, setRooms] = useState(null);
// eslint-disable-next-line
const [myRooms, setMyRooms] = useState(null);
const [personalRooms, setPersonalRooms] = useState(null);
const [publicRooms, setPublicRooms] = useState(null);


useEffect(()=>{
    async function fetchRooms() {
        let fetchThis = new Promise(async(resolve,reject)=>{
            try{
                let result = await axios.get(`${backendUrl}/api/rooms`);
                if(result.data.error){
                    // console.log(result.data);
                    setTimeout(()=>reject(result.data), 3000)
                }
                else {
                    setRooms(result.data.rooms);
                    setTimeout(()=>resolve(result.data), 3000)
                }
            }catch(err){   
                setTimeout(reject, 3000)
                console.log(err);

            }
        }) 

        toast.promise(
            fetchThis,
            {
                pending: 'Fetching rooms',
                success: 'Rooms fetched',
                error: 'Request rejected'
            }
        );  
      
    }
    fetchRooms();
},[userId,backendUrl])

useEffect(() => {
    if(rooms){
        let myRooms = rooms.filter((room)=> room.childrenOf === null && room.members.some((item)=> 
         Object.values(item).includes(userId) 
        ));
        let personalUserRooms = myRooms.filter((room) => room.members.length === 1)
        let publicUserRooms = myRooms.filter((room) => room.members.length > 1)
        setMyRooms(myRooms);
        setPersonalRooms(personalUserRooms)
        setPublicRooms(publicUserRooms)
    }

},[rooms,userId])


  return (
    <>
         <nav className='sidenavbar'>
                <ToastContainer/>
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
                    <ModalSearch text={"Search"} userRooms={myRooms} />
                </div>
            <div className='roomcontent'>

                {publicRooms !== null ? <Room name={"Rooms"} roomDetails={publicRooms}  parenticon={<FaUsers className='Fausers mx-3' />}/> : ""}
                {personalRooms !== null ? <Room name={"Personal"} roomDetails={personalRooms}  parenticon={<FaUserAlt className='Fausers mx-3' />}/> : ""}
                
            </div>
            <div className=" row "> 
                <hr className="text-dark "/>

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