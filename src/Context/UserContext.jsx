import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [userContextInfo, setUserContext] = useState({
    name: "",role:"",userid:"",_id:""
  });

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserContext(JSON.parse(userInfo));
    }
  }, []);

  const login = (userContextInfo) => {
    setUserContext(userContextInfo);
    localStorage.setItem("userInfo", JSON.stringify(userContextInfo));
  };

  const logout = () => {
    setUserContext(null);
    localStorage.removeItem("userInfo");
  };

  return (
    <UserContext.Provider value={{ userContextInfo, login, logout }}>
      {children}
    </UserContext.Provider>
  );

};
 const useAuth = ()=>useContext(UserContext);
export {UserContextProvider,useAuth,UserContext}