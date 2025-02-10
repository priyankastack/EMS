import React, { useEffect,useState } from 'react';
import {createContext} from 'react';
import {setlocalstorage,getlocalstorage} from '../components/common/localstorage';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const[userData,setUserData]=useState("");
     useEffect(()=>{
    setlocalstorage();
    getlocalstorage();
   const {employees,admins}=getlocalstorage();
  setUserData({employees,admins});
},[]);

    return(
        <>
       {<AuthContext.Provider value={userData}>{children}</AuthContext.Provider>} 
       </>
    )   
}
export default AuthProvider
