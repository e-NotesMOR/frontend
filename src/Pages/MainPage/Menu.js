import React, {useState} from 'react';
import './../../App.css';
import './../../Css/Content.css'
import Sidenavbar from '../../Components/Sidenavbar';
import Content from './Content';
import Members from '../../Components/Members';

export default function Menu() {

  const [roomMembers, setRoomMembers] = useState(null);
  let userName = localStorage.getItem('userName');
  
  return (
  <div className='menu'>
    
     <Sidenavbar name={userName}/>
     
        <div className='bg-dark'>
            <Content memberlist={(members => setRoomMembers(members))}/>
        </div>

        {roomMembers !== null ? (
          roomMembers.length > 1 ? (
            <div className='membernavbar '>
              <Members memberList={roomMembers}/>
              
            </div>
          )
          : ""
          )
          : ""
        }
      

        

    
   
    </div>
  )
}
