import React from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Loading from "./Loading.jsx";
import { useLogout } from "../hooks/useLogout.js";
function Logout() {

        const {handleLogout,loading} = useLogout()
  return (
    <section className="w-full h-screen flex justify-center items-center">

      <div>
        <h1 className="mb-[20vh]">Logout</h1>
         {
                loading? <Loading/> :  <button className="border-2 bg-red-500 text-white px-4 py-2" onClick={handleLogout}>Logout</button>
         }
      </div>
      <Toaster/>
    </section>
  );
}

export default Logout;
