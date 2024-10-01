import axios from "axios"
import { backendUrl } from "../utils.js"
import toast from "react-hot-toast"

const useEditTask = function(taskData){
  axios.put(`${backendUrl}/api/v1/tasks/update-task/`,taskData,{
    withCredentials:true
  }).then((res)=>{
    console.log(res.data.message)
    toast.success(res.data.message)
  }).catch((error)=>{
        console.log(error.response.data?.message) 
        toast.error(error.response.data?.message)
  })
}

export default useEditTask