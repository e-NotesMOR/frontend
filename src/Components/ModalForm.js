import React, {useState} from 'react'
import Modal from 'react-modal'
import {FaUserPlus , FaPencilAlt} from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import ModalAdd from './ModalAdd'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalForm({text}) {

  const  [modalIsOpen , setmodalIsOpen ] = useState(false)
  const [roomCode,setRoomCode] = useState('');
  let backendUrl = process.env.REACT_APP_BACKEND_URL;

  const joinRoom = ()=>{
     let fetchRoom = new Promise(async(resolve,reject)=>{
       let userId = localStorage.getItem('userId');
            try{
                let result = await axios.put(`${backendUrl}/api/rooms`,{userId,code:roomCode});
                if(result.data.error){
                    // console.log(result.data);
                    setTimeout(()=>reject(result.data), 3000)
                }
                else {
                    setTimeout(()=>resolve(result.data), 3000)
                }
            }catch(err){   
                setTimeout(reject, 3000)
                console.log(err);

            }
        }) 

        toast.promise(
            fetchRoom,
            {
                pending: 'Request is pending',
                success: 'Request resolved',
                error: 'Request rejected'
            }
        )
        return fetchRoom;
  }

  const handleCodeSubmit = async() =>{
    let data;
    try{
        data = await joinRoom();
        if(data){
          console.log(data)
          window.location.reload(false);
        }
    }catch(err){
        console.log(err);
    }   
    setmodalIsOpen(false)
    
  }

  return (
    <div>
        <button onClick={() => setmodalIsOpen(true)} type="submit" className="btn btn-primary p-1 navbutton" >
                {text}
        </button>
        <ToastContainer/>
        <Modal 
              isOpen={modalIsOpen}
              ariaHideApp={false}
              onRequestClose={() => setmodalIsOpen(false)} 
              style={
                {
                  overlay:{
                    backgroundColor: 'rgba(0,0,0,0.5)'
                  },
                  content:{
                    margin: 'auto',
                    height: '40%',
                    width: '40%',
                    textAlign: 'center',
                    backgroundColor: 'white)',
                    border: 'none',
                    boxShadow: '0 0px 0px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.5)'
                  }
                }
              }
              >
                  <div className="container-fluid  ">
                    <div className='row'>
                      <div className='col-6 Leftcol'>
                        <div className='container Modalcontent'>
                          <div className='CreateNote'>
                            Create a Notes
                            <div>
                              <FaPencilAlt style={{fontSize:"3.5rem"}} />
                            </div>
                          </div>
                          
                            <ModalAdd text={"Create"} />

                         
                        </div>
                      </div>


                      <div className='col-6 Rightcol'>
                        <div className='container Modalcontent'>

                        <div className='CreateNote'>
                            Join a Room
                            <div>
                              <FaUserPlus style={{fontSize:"3.5rem"}} />
                            </div>
                          </div>
                          <input className="form-control form-control-md w-100 mt-1  container-fluid" 
                                  type="text" 
                                  name="code" 
                                  id="code" 
                                  placeholder={"udp-ctxp-cue" }
                                  onChange={(e)=>setRoomCode(e.target.value)}
                                  />
                          <button className="btn btn-primary Modalbtn boldfont rounded mt-2 " 
                                  type="submit" 
                                  onClick={() => handleCodeSubmit()} >

                              Enter
                            </button>

                          </div>
                      </div>

                      </div>

                  </div>
            </Modal>

    </div>
  )
}

export default ModalForm