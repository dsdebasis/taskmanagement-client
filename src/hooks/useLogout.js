import axios from "axios";
import { backendUrl } from "../utils.js";
import toast from "react-hot-toast";
import { useState } from "react";

import { useAuth } from "../Context/UserContext.jsx";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();

  

  const handleLogout = function (e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${backendUrl}/api/v1/users/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res);
        toast.success(res.data.message);
        logout();
      })
      .catch((error) => {
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { handleLogout, loading, useAuth };
};

export { useLogout };
