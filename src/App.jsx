
import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
 
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Login/> }/>
        <Route path="/Signup" element={<Signup/> }/>
        {/* SidebarToggle={SidebarToggle} setSidebarToggle={setSidebarToggle} */}
        <Route path="/Dashboard" element={<Dashboard /> }/>
      </Routes>
    </Router>
  
    </>
  )
}

export default App
