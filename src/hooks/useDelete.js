import axios from "axios";
import toast from "react-hot-toast"
import {backendUrl} from "../utils.js";
import { useGetTask } from "./useGetTask.js";
const useDelete = function (taskId) {

    const { tasks,setTasks ,} = useGetTask();
  axios
    .delete(`${backendUrl}/api/v1/tasks/delete-task/${taskId}`,{
        withCredentials:true
    })
    .then((res) => {
        console.log(res.data)
        toast.success(res.data?.message)
    
       
    })
    .catch((error) => {
        console.log(error.response.data?.message)
        toast.error(error.response.data?.message)
    });
};

export {useDelete}
