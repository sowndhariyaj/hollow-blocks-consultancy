import React, {useEffect,useState} from "react" //useEffect
import  axios from "axios"
import "./Login.css"
import {IoMdContact} from "react-icons/io"
import {useCon} from './Auth';
import {FiMail} from  "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"

import { useNavigate ,Link } from "react-router-dom"
function Login() {
     const auth=useCon();
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        auth.setflag(!auth.flag);
        try{
            await axios.post("http://localhost:9000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/",{state:{id:email}})

                }
                else if(res.data=="notexist"){
                    alert("User have not sign up or input is not valid")
                }
            })
            .catch(e=>{
                alert("Wrong details")
                alert(e);
            })
        }
        catch(e){
            alert(e);

        }
    }
    return(
        <html>
        <div className="main">
        <div className="sub-main">
        <div className="login" >
            <div>
            <div className="img">
                <div className="container-image">
                <IoMdContact size={250}/>

                </div>
            </div>
            <h1>Login</h1>
             <br></br>
            <form action="POST">
                <div class="wrapper">
                {/* <div class="icon"><FiMail/></div> */}
                <input class="input" type="email" style={{height:'30px'}} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/>
                </div>
                <br/>
                <div class="wrapper">
                {/* <div class="icon"><RiLockPasswordLine/></div> */}
                <input class="input" type="password"  style={{height:'30px'}} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""/>
                </div>
            <br/><br/>
                <input className="button" type="submit" onClick={submit} />
             <br/>
            </form>
            <p>or</p><button className="button">
            <Link to="/Signup" style={{textDecoration:"none",color:"#EAE7DC"}}>SIGNUP</Link></button>
            </div>
        </div>
        </div>
        </div>
        </html>
    )
}

export default Login