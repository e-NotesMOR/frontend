import React from 'react'

function Members({memberList}) {
  return (
    <div className='container-fluid membergroup'>
        <div className='commenttitle'>
          Members
        </div>
        <div className='membersnames'>
        {memberList.sort((a, b) => a.userName.localeCompare(b.userName)).map((user,i)=>{
            return (
                <div key={i}>

                    <div className='container-fluid privatecomment'>
                      <div className='commentname'>
                        <label htmlFor="">{user.userName}</label>
                      </div>
                      <div className='commentdetails'>
                        <label htmlFor="">{user.email}</label>
                      </div>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Members