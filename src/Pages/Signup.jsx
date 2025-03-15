import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import mu from "../assets/mu.jpg"
import { Link,useNavigate } from 'react-router-dom'
const Signin = () => {
  const [username,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")
  
  function handleSubmit(){
    if(password!==confirmpassword){
      
  setPassword("")
  setUserName("")
  setConfirmPassword("")
alert("passwords don't match")
return 
    }


    
try {

  localStorage.setItem("username",username)
  localStorage.setItem("password",password)

  alert("register successful")


  setPassword("")
  setUserName("")
  
window.location.href="/"
  
} catch (error) {
  console.error(error)
}finally{
  // setPassword("")
  // setUserName("")

}
  
    
  }
  return (
    <div className=' flex flex-row'>
<div>
  <img src={mu} alt=""  className='w-full md:flex w-1/2  min-h-full' />
</div>
     <div className='bg-slate-200 w-full md:w-1/2'>
     <div className=' bg-slate-200'>
     <img src={logo} alt="" className='ml-[35%]' />
     <h1 className='text-blue-700 font-extrabold text-center'>Account Registration</h1>
     <p className='font-semibold mt-3 text-center'>To sign up kindly fill the form below </p>
          </div >
          <div className='bg-white p-6 w-2/3 ml-[20%] mt-5'>
     
           <div className='flex flex-col'>
           <label htmlFor="name" className='font-bold mt-2 mb-2 ml-7 mr-4'>Username</label>
           <input type="text" className=' bg-slate-100 mt-2 mb-2 ml-7 mr-4' 
           placeholder='Student No/Employee No' onChange={(e)=>setUserName(e.target.value)} value={username}/>
     </div>
     
     <div className='flex flex-col'>
           <label htmlFor="password" className='font-bold  mt-2 mb-2 ml-7 mr-4'>Password</label>
           <input type="password"  className=' bg-slate-100 ml-7 mr-4 mt-2 mb-4' 
           placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}  value={password}/>
     </div>
     <div className='flex flex-col'>
           <label htmlFor="password" className='font-bold  mt-2 mb-2 ml-7 mr-4'> Confirm Password</label>
           <input type="password" className=' bg-slate-100 ml-7 mr-4 mt-2 mb-4' 
           placeholder='Enter your Password' onChange={(e)=>setConfirmPassword(e.target.value)}  value={confirmpassword}/>
     </div>

    < div className='flex flex-row '>
<input type="checkbox" className='ml-9' /> <p className='gap-3'>Student</p>
<input type="checkbox"  className='justify-items-end'/> <p >Employee</p>
</div>


     <button className='font-bold text-white bg-blue-700 mb-4 p-2 w-full ml-7 mr-4' onClick={handleSubmit} >Submit</button>
          </div>

          <p className='ml-7 text-center'>Already have an account?<Link to="/"><p className='text-blue-700  mb-6 ml-[40%]'>LogIn</p></Link></p>
     </div>
    </div>
  )
}
export default Signin
