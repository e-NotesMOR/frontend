import React, {useState, useEffect} from 'react';
import TextArea from '../../Components/TextArea';
import Uploader from '../../Components/Uploader';
import './../../App.css';
import './../../Css/Content.css'
import { useParams } from 'react-router-dom';
import Comments from '../../Components/Comments';
import { FaEdit} from 'react-icons/fa'
import Settingsdrop from '../../Components/Settingsdrop';
import Members from '../../Components/Members';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Content({memberlist}) {
  const { id } = useParams()
  // eslint-disable-next-line
  const currentUser = localStorage.getItem('userId');
  // eslint-disable-next-line
  const [userId, setUserId] = useState(currentUser);
  let backendUrl = process.env.REACT_APP_BACKEND_URL;

  const [rooms, setRooms] = useState(null);
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
      }
    }
  }, [id,rooms, roomContent])

  return (
  <div className='dashboard yoverflow'> 
    <ToastContainer/>
    <div className='maincontent container ' > 
      <div className="row ">
          {roomContent !== null && roomContent !== undefined ? (
            <>
              <div className='row'>
                <div className='col-9'>
                    {roomContent.title !== null ? <TextArea css={'heading'} placeholder={'Your Title'} item={roomContent.title} lineheight={54} row={1} />: ""}
                    <div className="pt-2">
                  {roomContent.description !== null ?  <TextArea css={'description'} placeholder={'Enter Decription'} item={roomContent.description} lineheight={24} row={3}/>: ""}
              </div>
                </div>
                <div className='col-3 p-3'>
                  <div className='row'>
                    <div className='col-2'>
                        <button className='editicon btn btn-outline-light'>
                          <FaEdit style={{fontSize:"2rem"}}/>
                        </button>
                    </div>
                    <div className='col-5'>
                      <div className='editicon'>
                        <Settingsdrop/>
                      </div>
                      </div>
                  </div>
                    
                </div>
              </div>

              <div>
                  {roomContent.members.length> 1? <Members memberList={roomContent.members}/>: ''}
              </div>

              <div className="pt-4">        
                <Uploader />
              </div>

              <div>
                {roomContent.comments.length> 0 ? 
                  <div className='commentsection'>
                    <Comments commentList={roomContent.comments}/>
                  </div>
                  :<div className='commentsection'>
                    <Comments/>
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
