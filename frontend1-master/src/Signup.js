import React, {useEffect,useState} from "react" //useEffect
import  axios from "axios"
import "./Signup.css"
import {IoMdContact} from "react-icons/io"
import Navbar from './Navbar'
import { useNavigate ,Link } from "react-router-dom"
import {FiMail} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"  
function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:9000/Signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                    
                }
                else if(res.data=="notexist"){
                     
                    history("/login",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("Wrong details")
                console.log(e);
            })
        }
        
        catch(e){
            console.log(e);

        }
    }
    return(
        <div>
        

        <div className="main">
        <div className="sub-main">
        <div className="login">
            <div>
            <div className="img">
                <div className="container-image">
                <IoMdContact size={250}/>

                </div>
            </div>
            <h1>Signup</h1>

            <form action="POST">
                

                <div class="wrapper">
                {/* <div class="icon"> <FiMail/></div> */}
                <input  class="input" type="email"style={{height:'30px'}} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""/>
                </div>
                <br/>
                <div class="wrapper">
                {/* <div class="icon"><RiLockPasswordLine/></div> */}
                <input class="input" type="password" style={{height:'30px'}} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""/>
                </div>
            <br/><br/>
                <div className="login-button">
               
                <input className="button" type="submit" onClick={submit} />
                </div>           
            <br/>
            </form>
            
            {/* <p>OR</p> */}
            
            
            {/* <Link to="/">Login  Page</Link> */}
            
            <p className="link">
            <Link to="/Login"> Login</Link>
            </p>
        </div>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Login;