import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
function LayOut({children}) {
  return (
   <section>
        <Nav/>  
        {children}
        <Outlet/>
   </section>
  )
}

export default LayOut