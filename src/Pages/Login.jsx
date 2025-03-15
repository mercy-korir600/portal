import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import mmust from "../assets/mmust.jpg"
// import bg from "../assets/logo.jpg"
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  
  const [password, setPassword]=useState("")
  const[username,setUsername]=useState("")
  const [visible, setvisible]=useState("true");
function handleLogin(){
  const un=localStorage.getItem("username")
  const ps=localStorage.getItem("password")
  if(un===username&&ps===password){

    alert("login successful")

    window.location.href="/Dashboard"
  }else{
    alert("wrong username or password")
    return

  }

}
  return (
    <div className='flex flex-row '>
<div>
  <img src={mmust} alt=""  className='w-full md:flex w-1/2  min-h-full' />
  {/* <p className='text-center mt-5'>UNIVERSITY OF CHOICE </p> */}
</div>
     <div className='bg-slate-200 w-full md:w-1/2'>
     <div className='bg-slate-200' >
<img src={logo} alt="" className='ml-[35%]' />
<h1 className='text-blue-700 font-extrabold text-center'>Hi, Welcome back</h1>
<p className='font-semibold mt-3 text-center '>Please fill your details to log in </p>
     </div >



     <div className='bg-white p-6 w-2/3 ml-[20%] mt-5'>

      <div className='flex flex-col'>
      <label htmlFor="name" className='font-bold mt-2 mb-2 ml-7 mr-4'>Username</label>
      <input type="text" className=' bg-slate-100 mt-2 mb-2 ml-7 mr-4' 
      placeholder='Student No/Employee No' onChange={(e)=>setUsername(e.target.value)} value={username}/>
</div>

<div className='flex flex-col'>
      <label htmlFor="password" className='font-bold  mt-2 mb-2 ml-7 mr-4'>Password</label>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} 
      // type={visible?"text":"password"} 
      id='password  ' 
       className=' bg-slate-100 ml-7 mr-4 mt-2 mb-4' 
      placeholder='Enter your Password'
     />
</div>
<div className='flex flex-row '>
<input type="checkbox" className='ml-6' /><span className=''>Remember me</span>
<p className='font-bold text-blue-700 ml-10 mb-3'>Forgot Password?</p>
</div>
<button className='font-bold text-white w-full ml-7 mr-4 bg-blue-700 mb-4 p-2' onClick={handleLogin}>Sign In</button>

     </div>


     <div className='flex flex-col'>
  
  <p className='text-center'>Don't have account?<Link to="/Signup"><strong className='text-blue-700  mb-6 '>Sign up</strong></Link></p>
      
  
  </div>
     </div>

    
    </div>
  )
}

export default Login