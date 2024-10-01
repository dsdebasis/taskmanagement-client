import React from "react";
import { Toaster } from "react-hot-toast";
import { useRegister } from "../hooks/useRegister.js";
function Register() {
  
  const {handleUserData,handleRegister} = useRegister();

  return (
    <section className="w-full h-screen mx-auto flex justify-center items-center ">
      <form className="border-2 border-black flex flex-col p-4 gap-y-2" onSubmit={handleRegister}>
        
        <label>Full Name</label>
        <input type="text" name="name" placeholder="Name" className="border-2 p-1" onChange={handleUserData}/>

        <label>Userid</label>
        <input type="text" name="userid" placeholder="userid" className="border-2 p-1" onChange={handleUserData}/>

        <label>Password</label>
        <input name="password" type="password" placeholder="password" className="border-2 p-1" onChange={handleUserData}/>
        
        <label htmlFor="user">user</label>
        <input name="role" value={"user"} id="user" type="checkbox" onChange={handleUserData}/>


        <label htmlFor="role" id="admin">admin</label>
        <input  name="role" value={"admin"} id="admin" type="checkbox" onChange={handleUserData}/>

       <button className="border-2 p-1 bg-blue-500 text-white" type="submit">Register</button>
      </form>
      <Toaster/>
    </section>
  );
}

export default Register;
