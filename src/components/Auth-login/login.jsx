import React from "react";
import { useState } from "react";


const Login = ({handleLogin}) => {
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
   

const submitHandler=((e)=>{
    e.preventDefault(); 
    handleLogin(email,pass);
    setEmail("");
    setPass("");
});

    return (
    <>
    <div className="    flex h-screen   justify-center  items-center">
    <form onSubmit={(e)=>submitHandler(e)} className='border-2 border-emerald-600 flex flex-col justify-center  !p-20  gap-4 rounded-lg '>
      <input value={email} type="email" placeholder="Enter Email"  onChange={(e)=>setEmail(e.target.value)} className='  text-lg text-white placeholder:text-white bg-transparent outline-none border-emerald-600 h-12 border-solid border-2 rounded-full !px-3 ' required></input>
      <input  value={pass} type="current-password" placeholder="Enter Password"  onChange={(e)=>setPass(e.target.value)} className=' text-lg text-white  placeholder:text-white outline-none border-emerald-600 h-12 border-solid border-2 rounded-full !px-3 ' required></input>
      <button className='bg-emerald-600 h-12 rounded-full text-white cursor-pointer text-xl'>Login</button>
    </form>
 
     </div>
           
    </>
   
    )
}
export default Login;