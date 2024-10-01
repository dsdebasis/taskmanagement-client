import React from 'react'
function AssignedUser({assignUser}) {
  return (
    <section className='h-full w-full '>
     <div>
     
       <label htmlFor='assignedUser'>User id of user to be assigned</label>
        <input  onChange={assignUser} id='assignedUser' name='assignedUser' placeholder='Assigned User' className='border-2 p-1 min-h=[5vh] max-h-[10vh] w-full my-2'></input>
     </div>
    </section>
  )
}

export default AssignedUser