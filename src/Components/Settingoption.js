import React,{useState} from 'react'
import './../Css/option.css'
import {FaEllipsisH, FaTrash,FaRegClipboard, FaSignOutAlt} from 'react-icons/fa'
import DropButtons from './DropButtons'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function Settingoption({code,members}) {
  const { id } = useParams()
  const currentUser = localStorage.getItem('userId');
  // eslint-disable-next-line
  const [userId, setUserId] = useState(currentUser);
  let backendUrl = process.env.REACT_APP_BACKEND_URL;

   const fetchDelete = async()=>{
      let fetchThis = new Promise(async(resolve,reject)=>{
            try{
                let result = await axios.delete(`${backendUrl}/api/rooms`,{data:{roomId:id}});
                if(result.data.error){
                    setTimeout(()=>reject(result.data), 3000)
                }
                else {
                    setTimeout(()=>resolve(result.data), 3000);
                }
            }catch(err){   
                setTimeout(reject, 3000)
                console.log(err);
            }
        }) 

        toast.promise(
            fetchThis,
            {
                pending: 'Deleting room content',
                success: 'Room content saved',
                error: 'Request rejected'
            }
        );  
      return fetchDelete;
  }

  const fetchLeave = async()=>{
      let fetchThis = new Promise(async(resolve,reject)=>{
            try{
                let result = await axios.post(`${backendUrl}/api/rooms/leave`,{roomId:id,userId});
                if(result.data.error){
                    setTimeout(()=>reject(result.data), 3000)
                }
                else {
                    setTimeout(()=>resolve(result.data), 3000);
                }
            }catch(err){   
                setTimeout(reject, 3000)
                console.log(err);
            }
        }) 

        toast.promise(
            fetchThis,
            {
                pending: 'Leaving room',
                success: 'Room leaved successfully',
                error: 'Request rejected'
            }
        );  
      return fetchLeave;
  }

  const handleDelete =async()=>{
    if(window.confirm("Do you want to delete this room?") === true){
      //USER CONFIRMED
      let data;
      try{
          data = await fetchDelete();
         console.log(data);
      }catch(err){
          console.log(err);
      }  
      if(data){
            window.location.reload();
      } 
    }
  }
  
  const handleLeave = async()=>{
  if(window.confirm("Do you want to leave this room?") === true){
      //USER CONFIRMED
      let data;
      try{
          data = await fetchLeave();
          if(data){
            window.location.reload();
          }
      }catch(err){
          console.log(err);
      }   
    }

  }
  const handleCode =()=>{
    navigator.clipboard.writeText(code);
    toast('🔐 Code copied to clipboard', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
  return (
    <div>
            <div className="dropdown-container" tabIndex="-1">
                <FaEllipsisH style={{fontSize:"1.5rem"}}/>
                <div className="dropdown">

                    {members >1?<DropButtons text={"Leave"} icon={<FaSignOutAlt/>}  handleClick={()=>handleLeave()}/>:
                    <DropButtons text={"Delete"} icon={<FaTrash/>} handleClick={()=>handleDelete()}/>}
                    {/* {members <2?<DropButtons text={"Delete"} icon={<FaTrash/>} handleClick={()=>handleDelete()}/>:''}  */}
                    <DropButtons text={"Get Code"} icon={<FaRegClipboard/>}  handleClick={()=>handleCode()}/>
                </div>
            </div>
    </div>
  )
}

export default Settingoption