import React from "react";
import EditTask from "./EditTask.jsx";
function Task({
  title = "title",
  description = "description",
  status,
  priority,
  dueDate,
  assignedUser,
  id,
  handleDelete,
}) {
  const [editBtn, setEditBtn] = React.useState(false);

  const [taskId, setTaskId] = React.useState("");
  const handleEdit = function (e) {
    e.preventDefault();
    setTaskId(e.target.id);
    setEditBtn(!editBtn);
  };

  return (
    <section className=" w-fit flex justify-center items-center p-1">
      <section className="h-auto w-auto md:max-h-fit md:w-[20vw] border-2 border-black rounded-2xl shadow-xl p-2 flex flex-col gap-y-1 font-mono ">
        <span className="text-sm text-center bg-blue-400 rounded-md  text-white">
          {title}
        </span>
        <label className="w-fit text-orange-600">Description</label>
        <p className=" border-black max-h-fit text-xs">{description}</p>
        <div className="h-full w-full inline-grid grid-flow-col gap-x-10 text-sm ">
          <div>
            <h1 className="border-b-2 border-blue-500">Status</h1>
            <span className="text-blue-500">{status} </span>
          </div>
          <div>
            <h1 className="border-b-2 border-red-500 ">priority</h1>

            <span className="text-red-500">{priority} </span>
          </div>

          <div>
            <h1 className="border-b-2 border-yellow-800">Due Date</h1>
            <span className="text-yellow-800 overflow-hidden ">
              {new Date(dueDate).toLocaleDateString()}{" "}
            </span>
          </div>
        </div>
        <div>
          <span>Assigned User</span>
          <div className="border-2 border-black h-7 w-full rounded-md ">
            {assignedUser.map((user) => (
              <span className="p-1 text-blue-500" key={user}>
                {user}
              </span>
            ))}
          </div>
        </div>
        <div className="inline-flex justify-around">
          <button
            id={id}
            className=" px-3  bg-yellow-800 text-white hover:bg-yellow-600 hover:text-black"
            onClick={handleEdit}
          >
            Edit
          </button>
          {editBtn ? (
            <EditTask id={taskId} closePopup={() => setEditBtn(false)} />
          ) : (
            <></>
          )}
          <button
            onClick={handleDelete}
            id={id}
            className=" px-1  bg-red-500 text-white hover:bg-yellow-600 hover:text-black text-xs"
          >
            Delete
          </button>
        </div>
      </section>
    </section>
  );
}

export default Task;
