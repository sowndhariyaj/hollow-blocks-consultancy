import React,{useContext,useState} from 'react';
const auth=React.createContext()
export const Auth=(props)=>
{
  const [flag,setflag]=useState(false);
  return(<auth.Provider value={{flag,setflag}}>
    {props.children}
  </auth.Provider>)
}
export const useCon=()=>useContext(auth);