import React, {useState, useEffect} from 'react';
import TextArea from '../../Components/TextArea';
import './../../App.css';
import './../../Css/Content.css'
import { useParams } from 'react-router-dom';
import Comments from '../../Components/Comments';
import Settingoption from '../../Components/Settingoption';
// eslint-disable-next-line

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileUploader from '../../Components/FileUploader';

export default function Content({memberlist}) {
  const { id } = useParams()
  // eslint-disable-next-line
  const currentUser = localStorage.getItem('userId');
  // eslint-disable-next-line
  const [userId, setUserId] = useState(currentUser);
  let backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [isEdit,setIsEdit] = useState(true);
  const [rooms, setRooms] = useState(null);

  const  [title , setTitle ] = useState('')
  const  [description , setDescription ] = useState('')

  useEffect(()=>{
    async function fetchRooms() {
        let fetchThis = new Promise(async(resolve,reject)=>{
            try{
                let result = await axios.get(`${backendUrl}/api/rooms`);
                if(result.data.error){
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
                pending: 'Fetching room content',
                success: 'Room content fetched',
                error: 'Request rejected'
            }
        );  
      
    }
    fetchRooms();
  },[userId,backendUrl])


  const [roomContent, setRoomContent] = useState(null);
  // eslint-disable-next-line
  useEffect(() => {
    if(rooms !== null){
      let data = rooms.find( ({_id}) => id === _id );
      if ( data !== undefined){
        setRoomContent(data)
        memberlist(data.members)

      }
    }
  }, [id,rooms, roomContent,memberlist])


  //SET BUTTON BACK TO DEFAULT WHEN CHANGING CONTENT
  useEffect(()=>{
      setIsEdit(true);
  },[id])
  const handleButton = async()=>{
    if(isEdit === true){ //SET BUTTON TO SUBMIT
      setIsEdit(false)
    }else{  //SET BUTTON TO EDIT
      setIsEdit(true)
      let editData = new Promise(async(resolve,reject)=>{
      try{
          let result = await axios.put(`${backendUrl}/api/profiles/activity`,{title,description,roomId:id});
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
          editData,
          {
              pending: 'Uploading room contents',
              success: 'Room content updated',
              error: 'Request rejected'
          }
      );  
    }
    console.log(isEdit);
  }
  return (
  <div className='dashboard yoverflow'> 
    <ToastContainer closeOnClick autoClose={3000}/>
    <div className='maincontent container' > 
      <div className="row ">
          {roomContent !== null && roomContent !== undefined ? (
            <>
              <div className='row'>
                <div className='col-8'>
                    {roomContent.title !== null ? <TextArea editMode={isEdit} css={'heading'} placeholder={'Your Title'} item={roomContent.title} lineheight={54} row={1} userValue={(val)=>setTitle(val)}/>: ""}
                    <div className="pt-2">
                  {roomContent.description !== null ?  <TextArea editMode={isEdit} css={'description'} placeholder={'Enter Decription'} item={roomContent.description} lineheight={24} row={3} userValue={(val)=>setDescription(val)} />: ""}
              </div>
                </div>
                <div className='col-3 p-3'>
                  <div className='row'>
                    <div className='col-5'>
                      {isEdit === true? <button 
                        className='editicon btn btn-primary' 
                        onClick={()=>handleButton()}
                      >
                          Edit
                      </button>:       
                      <button
                        className='editicon btn btn-outline-secondary'
                        onClick={()=>handleButton()}
                      >
                          Submit
                      </button>}
            
                    </div>
                    <div className='col-5'>
                      <div>
                        <Settingoption code={roomContent.code} members={roomContent.members.length}/>
                      </div>
                    </div>
                  </div>
                    
                </div>
              </div>

              <div>
                    <div className='commentsection'>
                        <div className='commenttitle' style={{fontSize:'16px'}}>
                          Files
                        </div>
                        {roomContent.files.length>0 ? roomContent.files.map((file,i)=> (
                            <div key={i} className='container privatecomment'>
                              <a href={backendUrl+'/'+file.path} download target="_blank" rel="noopener noreferrer">{file.originalname}</a>
                              <div>

                              </div>
                            </div>
                        )) : "No files to show"}
                        <div className="d-grid gap-2 d-md-block">        
                          <FileUploader editing={isEdit}/>
                        </div>
                      </div>
              </div>

      

              <div>
                {roomContent.comments.length> 0 ? 
                  <div className='commentsection'>
                    <Comments commentList={roomContent.comments} editing={isEdit}/>
                  </div>
                  :<div className='commentsection'>
                    <Comments editing={isEdit}/>
                  </div>
                }    
              </div>
            </>  
            ): "" } 
      </div>
    </div>

  </div>
    )
}
