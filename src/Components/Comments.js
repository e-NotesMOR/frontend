import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import MiniUploader from './MiniUploader';
// import dateFormat from 'dateformat';
import TextArea from './TextArea';

function Comments({commentList}) {

    const now = new Date();
    

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
                                            {/* <br/>
                                            {comment.date} */}
                                            </label>
                                        </div>  

                                    </div>
                                    <div className='commentdetails'>{comment.comment}</div>
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
                            <label className='commentname'>Joshua C. Sacabon</label>
                        </div>
                        <div className='col-4'>
                            <label htmlFor="date" className='commentdate'>
                            {new Date(now).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} 
                            </label>
                        </div>  
                    </div>
                    <div className='row'> 
                        <TextArea css={'commentarea'} placeholder={'Add a Comment'} lineheight={18} row={2}/>
                    </div>
                    <div className="container row">
                        <div className='col-10'>
                            <MiniUploader/>




                        </div>
                       
                        <div className='col-2'>
                            {/* <div className="row">
                                <div className='col-3'>
                                    <div className="image-upload">
                                        <label htmlFor="file-input" className='pointer'>
                                            <FaDownload style={{fontSize:"1.5rem"}}/>
                                        </label>
                                        <input id="file-input" type="file"/>
                                    </div>
                                </div>
                            
                                <div className='col-9'> */}


                                    <div className="btn btn-primary postbtn rounded mx-5" >Post</div>
                                
                                
                                {/* </div> */}
                            {/* </div> */}
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
                    
    </div>
  )
}

export default Comments