import React, {useState} from 'react'
import Modal from 'react-modal'
// import { Link } from 'react-router-dom'
// import {FaUserPlus , FaPencilAlt} from 'react-icons/fa'
import TextArea from './../Components/TextArea.js'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalAdd({text}) {
  const  [modalIsOpen , setmodalIsOpen ] = useState(false)
  const  [title , setTitle ] = useState('')
  const  [description , setDescription ] = useState('')

  const currentUser = localStorage.getItem('userId');
  // eslint-disable-next-line
  const [userId, setUserId] = useState(currentUser);
  let backendUrl = process.env.REACT_APP_BACKEND_URL;

  const fetchSave =()=>{
      let fetchThis = new Promise(async(resolve,reject)=>{
            try{
                let result = await axios.post(`${backendUrl}/api/rooms`,{title,description,userId});
                if(result.data.error){
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
            fetchThis,
            {
                pending: 'Saving room content',
                success: 'Room content saved',
                error: 'Request rejected'
            }
        );  
      return fetchThis;
  }

  const handleSubmit = ()=>{
    setmodalIsOpen(false)
    fetchSave();
  }

  return (
    <div>
        <button onClick={() => setmodalIsOpen(true)} className="btn btn-primary Modalbtn boldfont rounded mt-5 " >
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
                    height: '80%',
                    width: '40%',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    border: 'none',
                    boxShadow: '0 0px 0px 0 rgba(0,0,0,0.5),0 6px 20px 0 rgba(0,0,0,0.5)'
                  }
                }
              }
              >
                  <div className="container-fluid p-5 ">
                    <div>
                      <TextArea css={'heading'} placeholder={'Your Title'} item={""} lineheight={54} row={1} userValue={(val)=>setTitle(val)}/>
                    </div>
                    <div>
                    <TextArea css={'description'} placeholder={'Enter Description'} item={""} lineheight={24} row={3} userValue={(val)=>setDescription(val)} />
                    </div>
                    <div>
                    <button
                          onClick={() => handleSubmit()} 
                          className="btn btn-primary Modalbtn boldfont rounded mt-5 "
                    > Submit
                    </button>
                    </div>
                  </div>
            </Modal>

    </div>
  )
}

export default ModalAdd