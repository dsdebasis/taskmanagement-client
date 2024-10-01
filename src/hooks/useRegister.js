import axios from "axios";
import { backendUrl } from "../utils.js";
import toast from "react-hot-toast";
import { useState } from "react";
import {useAuth} from "../Context/UserContext.jsx";
const useRegister = () => {
        
       const [userData,setUserData] = useState({
        name: "",
        userid: "",
        password: "",
       })

       const {login} = useAuth();
       const handleUserData = function(e) {
        setUserData({...userData,[e.target.name]:e.target.value})
       }


       const handleRegister = function(e) {
        e.preventDefault();
        console.log(userData);
        axios
          .post(`${backendUrl}/api/v1/users/register`, userData, {
            headers: {
              "content-type": "application/json",
              accept: "application/json",
            },
          })
          .then((res) => {
            console.log(res.data.data);
            toast.success("Registration Successful");
            login(res.data.data);
          }).catch((error) => {
                  console.log(error.response.data.message);
                  toast.error(error.response.data.message);
          })
       }

       return {handleUserData,handleRegister}
}

export { useRegister };