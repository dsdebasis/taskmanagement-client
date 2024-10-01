import React from "react";
import CreateTask from "./CreateTask.jsx";
import Task from "./Task.jsx";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useGetTask } from "../hooks/useGetTask.js";
import { useEffect } from "react";
import { useAuth } from "../Context/UserContext.jsx";
import Aluser from "./Aluser.jsx";
import axios from "axios";
import { backendUrl } from "../utils.js";

function DashBoard() {
  const [taskName, settaskName] = useState({
    totalTask: "api/v1/tasks/get-task/page?page=1",
    status: "api/v1/tasks/get-taskBy-status",
    priority: "api/v1/tasks/get-taskBy-priority",
  });

  const { userContextInfo } = useAuth();
  // console.log(userContextInfo)
  const { error, getTasks, loading, tasks,setTasks } = useGetTask();
 const [showCreateComp,setShowCreateComp] = useState(false)
  const [url, setUrl] = useState("api/v1/tasks/get-task/page?page=1");

  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const [taskDeleted,setTaskDeleted] = useState()
  
  useEffect(() => {
    getTasks(url, {});

    return () => {};
  }, []);

  const handleCreateComp = (e)=>{
    e.preventDefault()
    setShowCreateComp(!showCreateComp)
   }

    
  const showAlltask = (e) => {
    e.preventDefault();
    getTasks(url, {});
  };

  const handleStatus = function (e) {
    getTasks(taskName.status, { status: e.target.value });
  };

  const handlePriority = function (e) {
    getTasks(taskName.priority, { priority: e.target.value });
  };

  const handleDelete = function (e) {
    e.preventDefault();
    axios
    .delete(`${backendUrl}/api/v1/tasks/delete-task/${e.target.id}`,{
        withCredentials:true
    })
    .then((res) => {
        console.log(res.data)
        // toast.success(res.data?.message)
        const taskid = e.target.id
        setTasks((prev) => prev.filter((task) => task._id !== taskid))
    })
    .catch((error) => {
        console.log(error.response.data?.message)
        toast.error(error.response.data?.message)
    });

    
  };
  return (
    <section>
      <div className="flex flex-col justify-between h-[10vh]">
        <div className="text-center ">
          <h1 className="md:inline text-center mx-2">
            User Name: {userContextInfo.name}
          </h1>
          <h1 className="md:inline text-center">
            User Id: {userContextInfo.userid}
          </h1>
        </div>
        <h1 className="bg-red-600 text-white text-center">
          User will Only able to see, assigned taks and created by them.
        </h1>
      </div>
      <Aluser/>
      <section className=" max-w-screen h-full mt-2 md:max-w-full min-h-screen border-2 grid md:grid-flow-col md:grid-cols-4 gap-y-7 md:gap-x-[5vw] px-2 md:px-10 py-2 ">
        <form
          className="w-[90vw] min-h-fit max-h-[30vh] md:w-[20vw] md:max-h-[80%] border-2  border-black md:p-1 md:px-2 flex flex-col justify-evenly"
          // onClick={handleTaskEvent}
        >
          <h1 className="text-center my-2 text-2xl  text-blue border-b-2 border-black">
            Filter Task{" "}
          </h1>
       
          <button className="bg-black text-white w-full py-2  rounded-md text-center focus:bg-green-700" onClick={handleCreateComp}>Create Task</button>
          {userContextInfo.admin ? (
            <div>
              <label>Type Userid</label>
              <br></br>
              <input type="text" name="userid" className="border-2 " />
            </div>
          ) : (
            <></>
          )}
          <button
            onClick={showAlltask}
            name="totalTask"
            className="md:w-full bg-black text-white md:py-2  rounded-md text-center focus:bg-green-700 "
          >
            Total Task
          </button>

          <div>
            <label>By Status</label>
            <select name="status" onChange={handleStatus} value={status}>
              <option>Select Status</option>
              <option value={"todo"}>todo</option>
              <option value={"inProgress"}>inProgress</option>
              <option value={"completed"}>completed</option>
            </select>
          </div>

          <div>
            <label>By Priority</label>
            <select name="priority" onChange={handlePriority} value={priority}>
              <option>Select Priority</option>
              <option value={"low"}>low</option>
              <option value={"medium"}>medium</option>
              <option value={"high"}>high</option>
            </select>
          </div>
        </form>
        <div className="min-h-fit max-w-screeen md:max-h-[80%] md:max-w-[70vw] border-2  border-black col-span-3 flex md:flex-row flex-wrap justify-around items-start overflow-auto">
        {showCreateComp ? <CreateTask/> : <> </>}
          {tasks?.map((task) => (
            <Task
              key={task._id}
              id={task._id}
              title={task.title}
              description={task.description}
              status={task.status}
              priority={task.priority}
              dueDate={task.dueDate}
              assignedUser={task.assignedUser}
              handleDelete={handleDelete}
              
            />
          ))}
        </div>
      </section>
      <Toaster />
    </section>
  );
}

export default DashBoard;
