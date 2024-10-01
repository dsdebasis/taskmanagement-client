import axios from "axios";
import { backendUrl } from "../utils.js";
import { useState } from "react";
import toast from "react-hot-toast";

// a single api that handle both user and admin for gettting task
const useGetTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [taskDeleted,setTaskDeleted] = useState(false)
  const getTasks = function (url,data) {
        // api/v1/tasks/get-task/page?page=1
    setLoading(true);
    axios
      .post(`${backendUrl}/${url}`, data, {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data);
        setTasks(res.data.data);
      })
      .catch((error) => {
        setError(true);
        toast.error(error.response.data.message);
        setMessage(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { tasks, getTasks, loading, error, message ,setTasks,setTaskDeleted,taskDeleted};
};

export { useGetTask };
