import React, {useState, useEffect} from 'react';
import TextArea from '../../Components/TextArea';
import Uploader from '../../Components/Uploader';
import './../../App.css';
import { useParams } from 'react-router-dom';
import { fakedata } from '../../Models/fakedata';


export default function Content() {

  const { id } = useParams()

  const [roomContent, setRoomContent] = useState(null);
  // eslint-disable-next-line
  useEffect(() => {
    let data = fakedata.find( ({_id}) => id === _id );
    if ( data !== undefined){
    setRoomContent(data)}
    console.log(roomContent,id)
  }, [id, roomContent])
  

  return (
  <div className='dashboard yoverflow '> 
    <div className='maincontent container'> 
      <div className="row ">
          <div>
          {roomContent !== null && roomContent !== undefined ? (

          roomContent.title !== null ?  

          <TextArea css={'heading'} placeholder={'Your Title'} item={roomContent.title} lineheight={54}/>
          
          : ""
        
          ): "" } 
     
          </div>
          <div className="pt-2">
        
          {roomContent !== null && roomContent !== undefined ? (
            roomContent.description !== null ?  

            <TextArea css={'description'} placeholder={'Enter Decription'} item={roomContent.description} lineheight={24}/>
            
            : "" 
          ): "" }

          
          </div>
          <div className="pt-4">
            <Uploader />
          </div>  
          
      </div>
    </div>

  </div>
    )
}
