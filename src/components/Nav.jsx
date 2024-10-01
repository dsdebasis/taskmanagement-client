import React from "react";
import { useAuth } from "../Context/UserContext.jsx";
import {Link} from "react-router-dom";
function Nav() {

        const navItems = ["login","register","logout","create-task","dashboard"];
  return <nav className="h-[5vh] w-full bg-blue-500 border-2 flex items-center justify-evenly">
    {navItems.map((item) => (
      <Link to={item} key={item} className="text-white p-1">{item}</Link>
    ))}
  </nav>;
}

export default Nav;
