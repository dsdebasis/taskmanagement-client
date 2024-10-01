import React, { useState } from "react";
import { useAuth } from "../Context/UserContext.jsx";
import AssignedUser from "./AssignedUser.jsx";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import useCreateTask from "../hooks/useCreateTask.js";
function CreateTask() {
  // const [admin, setAdmin] = useState(false);
  const { userContextInfo } = useAuth();

  const { handleCreateTask:createTask,setTitle,setDescription,setStatus,setPriority,setDueDate,setAssignedUser,status,priority } = useCreateTask();

 
  const handleAssignUser = function(e){
    setAssignedUser(e.target.value)
  }

  const handleCreateTask =function (e) {
    e.preventDefault()
    createTask()
  }
  return (
    <section className="h-fit w-full p-1 flex justify-center items-start">
      <form   className=" max-h-[90vh] w-full md:w-[30vw] border-2 border-black rounded-md p-1 md:p-2 flex flex-col md:px-5 gap-y-2" onSubmit={handleCreateTask}>
        <header className="text-center text-3xl">Create Task</header>

        <label>Task Title</label>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="border-2 border-black p-1 rounded-md" onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        <label>Task Description</label>
        <textarea
          placeholder="Task Description"
          className="border-2 border-black p-1 rounded-md max-h-[30vh] min-h-[5vh]"
         onChange={(e)=>{
          setDescription(e.target.value)
         }}></textarea>

        <label htmlFor="priority">Task Priority</label>
        <select id="priority" name="priority" className="border-2 border-black" value={priority} onChange={(e)=>{
          setPriority(e.target.value)
        }}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label htmlFor="status" id="status">
          Status
        </label>
        <select name="status" id="status" className="border-2 border-black" value={status} onChange={(e)=>{
               setStatus(e.target.value)
        }}>
          <option value="todo">todo</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <label>Due Date</label>
        <input  name="dueDate" type="date" className="border-2 border-black p-1 rounded-md"  onChange={(e)=>{
          setDueDate(e.target.value)
        }}/>

        {userContextInfo.role == "admin" ? <AssignedUser assignUser={handleAssignUser} /> :<></>}
        <button  type="submit" className="w-[80%] mx-auto p-1 bg-blue-500 text-white">
          Create Task
        </button>
      </form>
      <Toaster/>
    </section>
  );
}

export default CreateTask;
