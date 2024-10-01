import React from "react";
import useLogin from "../hooks/useLogin.js";
import toast, { Toaster } from 'react-hot-toast';
import Loading from "./Loading.jsx";

function Login() {

  const {userid,password,setUserid,setPassword,loading,handleLogin}   = useLogin()


  return (
    <section className="h-screen w-full flex justify-center items-center">
      <form className="flex flex-col gap-y-3 border-2 border-black p-2" onSubmit={handleLogin}>
      <header className="text-center">Login</header>
   
        <label>Userid</label>
        <input type="text" placeholder="username" className="border-2 p-1" onChange={(e)=>setUserid(e.target.value)}/>
        <label>Password</label> 

        <input type="password" placeholder="password" className="border-2 p-1" onChange={(e)=>setPassword(e.target.value)}/>

        {loading ? <Loading/> :  <button className="border-2 p-1 bg-blue-500 text-white" type="submit">Login</button>}
      </form>
      <Toaster />
    </section>
  );
}

export default Login;
