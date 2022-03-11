import React,{useState} from "react";
import { Link,useHistory  } from 'react-router-dom';
import {FaUser,FaLock} from 'react-icons/fa';
import "./../../Css/Home.css"
// eslint-disable-next-line
import { fakedata } from "../../Models/fakedata";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage () {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    let backendUrl = process.env.REACT_APP_BACKEND_URL;

    const loginUser = () =>{
        let fetchUser = new Promise(async(resolve,reject)=>{
            try{
                let result = await axios.post(`${backendUrl}/api/logins`,{email:username,password});
                if(result.data.error){
                    // console.log(result.data);
                    setTimeout(()=>reject(result.data), 3000)
                }
                else {
                    setTimeout(()=>resolve(result.data), 3000)
                }
            }catch(err){   
                setTimeout(reject, 3000)
                console.log(err);

            }
        }) 

        toast.promise(
            fetchUser,
            {
                pending: 'Request is pending',
                success: 'Request resolved',
                error: 'Request rejected'
            }
        )
        return fetchUser;
    }

    
    const history = useHistory();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(username, password);
        console.log(process.env.REACT_APP_BACKEND_URL)
        let details;
        try{
            details = await loginUser();
            if(details.userId){
              localStorage.setItem('userId',details.userId);
              localStorage.setItem('userName',details.userName);
              history.push('/menu/1');
            }
        }catch(err){
            console.log(err);
        }   
        console.log(details);
      
        
    }
    return(
        <div>
            <div >
            <div className="container-fluid ">
                <ToastContainer/>
                <div className="container p-5 shadow-lg loginForm"> 
                    <h3 className="text-center pb-4 pt-2 Logindesign">LOGIN</h3>

                    <form  onSubmit={handleSubmit}>

                            <div className="row g-2 align-items-center form-group"> 
                                    <label htmlFor="username" className="formdesign">Username</label>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text p-3" id="basic-addon1">
                                                <FaUser/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="Type your username" 
                                                aria-label="Username" 
                                                aria-describedby="basic-addon1" 
                                                id="username" 
                                                onChange={(e)=> setUsername(e.target.value)} required/>
                                    </div>
                                </div>

                                <div className="row g-2 align-items-center form-group mt-1"> 
                                    <label htmlFor="password" className="formdesign">Password</label>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text p-3" id="basic-addon1">
                                                <FaLock/>
                                            </span>
                                        </div>
                                        <input type="password" 
                                                className="form-control" 
                                                placeholder="Type your password" 
                                                aria-label="password" 
                                                aria-describedby="basic-addon1" 
                                                id="password" 
                                                onChange={(e)=> setPassword(e.target.value)} required/>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-7 d-flex flex-row" >
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="Remember"/>
                                            <label className="form-check-label formdesign" htmlFor="Remember">Remember Password</label>
                                        </div>
                                    </div>
                                    <div className="col-5 d-flex flex-row-reverse ">
                                        <Link to="/" className="text-decoration-none text-dark formdesign">Forget Password?</Link>
                                    </div>
                                    {/* <Link to="/menu/1"> */}
                                        <input type="submit" onClick={handleSubmit} value="Login" className="btn btn-primary w-100 Signupbtn boldfont rounded mt-5 p-2" />    
                                    {/* </Link> */}
                                </div>
                    </form>

                    <hr/>
                            <div className="text-center formdesign">
                                Don't have an Account?  
                                <Link to="/signup" className="px-4 text-decoration-none text-dark formdesign">SIGN UP</Link>
                            </div>
                </div>
            </div>
            </div>
        </div>
    )
}