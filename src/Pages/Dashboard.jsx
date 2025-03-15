import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Dashboard = () => {
  const[SidebarToggle,setSidebarToggle]=useState(false)
  return (
    <div className={` bg-slate-200`} >
  
     <Navbar 
     SidebarToggle={SidebarToggle} setSidebarToggle={setSidebarToggle}/>
     <Sidebar SidebarToggle={SidebarToggle}/>

    </div>
  )
}

export default Dashboard