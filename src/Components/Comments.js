import React from 'react'

function Comments({commentList}) {
  return (
    <div>
        {/* Lagyan mo rin nung comment box tas file attach then send, gamit ka na lang input type file tas tsaka mo designan 
            icon imbis na image https://stackoverflow.com/questions/2855589/replace-input-type-file-by-an-image
        */}
        {console.log(commentList)}
        Comments 
        {commentList !== null && commentList !== undefined? (
            commentList.sort((a, b) => b.date - a.date).map((comment,i)=>{
                return( 
                    <div key={i}>
                        <label>{comment.commenter.userName}</label> 
                        <label htmlFor="date">&nbsp;&nbsp;&nbsp;{comment.date}</label>
                        <p>{comment.comment}</p>
                    </div>
                );    
            })
        ): ''}
    </div>
  )
}

export default Comments