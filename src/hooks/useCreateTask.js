import axios from "axios"
import { backendUrl } from "../utils.js"
import { useState } from "react"
import toast from "react-hot-toast";
import { useAuth } from "../Context/UserContext.jsx";
function useCreateTask() {
   const [title,setTitle] = useState("");
   const [description,setDescription] = useState("");
   const [status,setStatus] = useState("todo");
   const [priority,setPriority] = useState("low");
   const [dueDate,setDueDate] = useState("");
   const [assignedUser,setAssignedUser] = useState("");
   const [loading,setLoading] = useState(false);
   const {userContextInfo} = useAuth();


 
   const handleCreateTask = function(e){
    //    e.preventDefault()
       setLoading(true);
       axios.post(`${backendUrl}/api/v1/tasks/create`,{title,description,status,priority,dueDate,assignedUser},{
          withCredentials:true     
       }).then((res)=>{
        console.log(res.data)
        toast.success("task created")
       }).catch((error)=>{
           console.log(error.response.data.message);
           toast.error(error.response.data.message)
       }).finally(()=>{
        setLoading(false)
       })
   }

   return {setTitle,setDescription,setStatus,setPriority,setDueDate,setAssignedUser,handleCreateTask,status,priority,assignedUser}
}

export default useCreateTask