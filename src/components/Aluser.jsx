import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { backendUrl } from '../utils.js'
function Aluser() {


const [users,setUsers] = useState([])

useEffect(()=>{ 
    axios.get(`${backendUrl}/api/v1/tasks/get-users`,{
      withCredentials:true
    }).then((res)=>{
      // console.log(res.data.data)
      setUsers(res.data.data)
    }).catch((error)=>{

    })
},[])



  return (
    <div className='h-10 w-full  border-2 border-black inline-flex justify-evenly items-center overflow-auto'>
      <span className="text-black">All user::</span> 
      {users?.map((item)=>{
        return (
          <span key= {item._id} className="text-blue-700 mx-1">{item.userid}</span>
        )
      })}
    </div>
  )
}

export default Aluser