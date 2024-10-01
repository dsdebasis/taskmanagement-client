import React from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../utils.js";
import toast from "react-hot-toast";
import { useAuth } from "../Context/UserContext.jsx";
function useLogin() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { login,logout } = useAuth();
  const handleLogin = function (e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${backendUrl}/api/v1/users/login`, { userid, password },{
        headers: {
                "content-type": "application/json",
                accept: "application/json",
              },
              withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data);

        login(res.data.data);
        toast.success("Login Successfull");
      })
      .catch((error) => {
        console.log(error.response.data.message);

        toast.error(error.response.data.message);
      })
      .finally(() => {
        // setLoading(false)
      });
  };
  return { userid, password, setUserid, setPassword, handleLogin };
}

export default useLogin;
