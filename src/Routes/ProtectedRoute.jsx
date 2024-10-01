import {useAuth} from "../Context/UserContext.jsx";
import {Navigate} from "react-router-dom";
import { UserContext } from "../Context/UserContext.jsx";
const ProtectedRoute = ({children})=>{

        const {userContextInfo} = useAuth();

       // console.log("pr",userContextInfo)
       if(localStorage.getItem("userInfo") == null){
        return <Navigate to="/login"/>
       }
       
        return children
}

export {ProtectedRoute};