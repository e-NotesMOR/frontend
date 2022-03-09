import React from 'react'

function Members({memberList}) {
  return (
    <div>
        Members
        {memberList.sort((a, b) => a.userName.localeCompare(b.userName)).map((user,i)=>{
            return (
                <div key={i}>
                    <label htmlFor="">{user.userName}  &nbsp;&nbsp;&nbsp;</label>
                    <label htmlFor="">{user.email}</label>
                </div>
            )
        })}
    </div>
  )
}

export default Members