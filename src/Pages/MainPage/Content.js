import React, {useState, useEffect} from 'react';
import TextArea from '../../Components/TextArea';
import Uploader from '../../Components/Uploader';
import './../../App.css';
import './../../Css/Content.css'
import { useParams } from 'react-router-dom';
import { fakedata } from '../../Models/fakedata';
import Comments from '../../Components/Comments';
import { FaEdit} from 'react-icons/fa'
import Settingsdrop from '../../Components/Settingsdrop';


export default function Content({memberlist}) {

  const { id } = useParams()

  const [roomContent, setRoomContent] = useState(null);
  // eslint-disable-next-line
  useEffect(() => {
    let data = fakedata.find( ({_id}) => id === _id );
    if ( data !== undefined){
      memberlist(data.members)
      setRoomContent(data)}

  }, [id, roomContent])


  

  return (

  <div className='dashboard yoverflow'> 
 
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



              <div className="pt-4">        
                <Uploader />
              </div>

              {/* ikaw na bahala mag design, ginawa ko lang mapping*/}
              <div>
                {roomContent.comments.length> 0 ? 
                <div className='commentsection'>
                  <Comments commentList={roomContent.comments}/>
                </div>
                :''}    
              </div>
            </>  
            ): "" } 
      </div>
    </div>

  </div>
    )
}
