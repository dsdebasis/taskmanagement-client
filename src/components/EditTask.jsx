import React from "react";
import { useAuth } from "../Context/UserContext.jsx";
import { Toaster } from "react-hot-toast";
import useEditTask from "../hooks/useEdit.js";
import AssignedUser from "./AssignedUser.jsx";

function EditTask({ id ,closePopup}) {
  const { userContextInfo } = useAuth();

  const [editTaskDetails, setEditTaskDetails] = React.useState({
    id: id,
    status: "",
    priority: "",
  });
  const handleEditEvent = function (e) {
    e.preventDefault();
    useEditTask(editTaskDetails);  
  };


  const handleEditTask = function (e) {
    setEditTaskDetails({ ...editTaskDetails, [e.target.name]: e.target.value });
  };
  return (
    <section className="h-fit w-fit p-1 flex justify-center items-start absolute z-30 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20  top-[10vh]">
      <form
        className=" max-h-[90vh] w-full md:w-[30vw] border-2 border-black rounded-md p-1 md:p-2 flex flex-col md:px-5 gap-y-2"
        onSubmit={handleEditEvent}
      >
        <header className="text-center text-3xl">Edit Task</header>

        <label>Task Title</label>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="border-2 border-black p-1 rounded-md"
          onChange={handleEditTask}
        />

        <label>Task Description</label>
        <textarea
          name="description"
          placeholder="Task Description"
          className="border-2 border-black p-1 rounded-md max-h-[30vh] min-h-[5vh]"
          onChange={handleEditTask}
        ></textarea>

        <label htmlFor="priority">Task Priority</label>
        <select
          id="priority"
          name="priority"
          className="border-2 border-black"
          value={editTaskDetails?.priority}
          onChange={handleEditTask}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label htmlFor="status" id="status">
          Status
        </label>
        <select
          name="status"
          id="status"
          className="border-2 border-black"
          value={editTaskDetails?.status}
          onChange={handleEditTask}
        >
          <option value="todo">todo</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <label>Due Date</label>
        <input
          name="dueDate"
          type="date"
          className="border-2 border-black p-1 rounded-md"
          onChange={handleEditTask}
        />

        {userContextInfo.role == "admin" ? (
          <AssignedUser assignUser={handleEditTask} />
        ) : (
          <></>
        )}
        <button
          type="submit"
          className="w-[80%] mx-auto p-1 bg-blue-500 text-white"
        >
          Edit Task
        </button>

        <button onClick={closePopup}>Cancel</button>
      </form>
      <Toaster />
    </section>
  );
}

export default EditTask;
