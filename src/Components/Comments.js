import React,{useState} from 'react'
import { FaUserCircle,FaTrash } from "react-icons/fa"
// import dateFormat from 'dateformat';
import TextArea from './TextArea';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function Comments({commentList}) {
  let userName = localStorage.getItem('userName');
  const now = new Date();
  const [comment,setComment]=useState(null);
  const [file, setFile] = useState();
  const { id } = useParams()
  const currentUser = localStorage.getItem('userId');
  // eslint-disable-next-line
  const [userId, setUserId] = useState(currentUser);

  let backendUrl = process.env.REACT_APP_BACKEND_URL;


    const handleChange = (e)=> {
        setFile(e.target.files[0]);
    }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
          let formData = new FormData();
          if(file)
            formData.append('document', file);
          formData.append('comment', comment);
          formData.append('commenter', userId);
          formData.append('roomId', id);
                  
          const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
          };

          let uploadFile = new Promise(async(resolve,reject)=>{
          try{
              let result = await axios.post(`${backendUrl}/api/profiles/message`, formData, config);
              if(result.data.error){
                  setTimeout(()=>reject(result.data), 3000)
              }
              else {
                  setTimeout(()=>resolve(result.data), 3000)
                  window.location.reload();
              }
          }catch(err){   
              setTimeout(reject, 3000)
              console.log(err);
          }
        }) 
        toast.promise(
            uploadFile,
            {
                pending: 'Adding comment to room',
                success: 'Comment added',
                error: 'Request rejected'
            }
        );  
  }

  const handleDelete = async(comId)=>{
        if(window.confirm("Do you want to delete this comment?") === true){
            //USER CONFIRMED
            let res;
            try{
                res  = await axios.delete(`${backendUrl}/api/profiles/message`,{data:{roomId:id,commentId:comId}});
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
            if(res.data) {
                window.location.reload();
            }  
        }   
  }
  return (
    <div>
        {/* Lagyan mo rin nung comment box tas file attach then send, gamit ka na lang input type file tas tsaka mo designan 
            icon imbis na image https://stackoverflow.com/questions/2855589/replace-input-type-file-by-an-image
        */}
        <div className='commenttitle'>
            Comments
        </div>
         
        {commentList !== null && commentList !== undefined ? (
            commentList.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).map((comment,i)=>{
                return(
                <div  key={i}>
             
                    <div className='container privatecomment' > 
                        <div>
                            <div className='row container'>
                                <div className='col-1'>
                                    <FaUserCircle style={{fontSize:"2.8rem"}}/>
                                </div>
                                <div className='col-11'>
                                    <div className='row mb-1'> 
                                        <div className='col-8'>
                                            <label className='commentname'>{comment.commenter.userName}</label>
                                        </div>
                                        <div className='col-4'>
                                            <label htmlFor="date" className='commentdate'>
                                            {new Date(comment.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} 
                                           
                                            {comment.commenter._id === userId?(
                                                <label style={{marginLeft:'20px'}}>
                                                    <button  className="btn" onClick={()=>handleDelete(comment._id)}><FaTrash/></button>
                                                </label>
                                            ):''}
                                      
                                            {/* <br/>
                                            {comment.date} */}
                                            </label>
                                        </div>  

                                    </div>
                                    <div className='commentdetails'>{comment.comment}</div>
                                      {comment.file !== undefined && comment.file !== null?( 
                                            <label className='commentdetails'>
                                                <a href={backendUrl+'/'+comment.file.path} download target="_blank" rel="noopener noreferrer">{comment.file.originalname}</a>
                                            </label>)
                                    :''}
                                </div>
                            </div>
                          
                           
                        </div>
                    </div>

                </div>
                );    
            })
        ): ''}
        
         <div className='container privatecomment'> 
            <div className='row container'>
                <div className='col-1 container-fluid'>
                    <FaUserCircle style={{fontSize:"2.8rem"}}/>
                </div>
                <div className='col-11 container-fluid'>
                    <div className='row mb-2'> 
                        <div className='col-8'>
                            <label className='commentname'>{userName}</label>
                        </div>
                        <div className='col-4'>
                            <label htmlFor="date" className='commentdate'>
                            {new Date(now).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} 
                            </label>
                        </div>  
                    </div>
                    <div className='row'> 
                        <TextArea css={'commentarea'} userValue={(val)=>setComment(val)} placeholder={'Add a Comment'} lineheight={18} row={2}/>
                    </div>
            
                        <div className='col-10'>
                            <div>
                                <form onSubmit={handleSubmit}  className="row g-2">
                                    <label className="col-auto">
                                        <input type="file" className="form-control" onChange={handleChange}  />
                                    </label>

                                    <label className="col-3">
                                        <button type="submit" className="btn btn-primary form-control"  style={{marginLeft:'275px'}}>Comment</button>
                                    </label>
                                </form>
                            </div>
                        </div>                
                </div>
            </div>
        </div>
                    
    </div>
  )
}

export default Comments