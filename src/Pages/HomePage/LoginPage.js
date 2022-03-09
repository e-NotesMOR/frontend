import React,{useState} from "react";
import { Link } from 'react-router-dom';
import {FaUser,FaLock} from 'react-icons/fa';
import "./../../Css/Home.css"
import { fakedata } from "../../Models/fakedata";


export default function LoginPage () {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

     const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username, password);
    }
    return(
        <div>
            <div >
            <div class="container-fluid ">
                <div class="container p-5 shadow-lg loginForm"> 
                    <h3 class="text-center pb-4 pt-2 Logindesign">LOGIN</h3>

                    <form  onSubmit={handleSubmit}>

                            <div class="row g-2 align-items-center form-group"> 
                                    <label htmlFor="username" className="formdesign">Username</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text p-3" id="basic-addon1">
                                                <FaUser/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                class="form-control" 
                                                placeholder="Type your username" 
                                                aria-label="Username" 
                                                aria-describedby="basic-addon1" 
                                                id="username" 
                                                onChange={(e)=> setUsername(e.target.value)} required/>
                                    </div>
                                </div>

                                <div class="row g-2 align-items-center form-group mt-1"> 
                                    <label htmlFor="password" className="formdesign">Password</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text p-3" id="basic-addon1">
                                                <FaLock/>
                                            </span>
                                        </div>
                                        <input type="password" 
                                                class="form-control" 
                                                placeholder="Type your password" 
                                                aria-label="password" 
                                                aria-describedby="basic-addon1" 
                                                id="password" 
                                                onChange={(e)=> setPassword(e.target.value)} required/>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-7 d-flex flex-row" >
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="Remember"/>
                                            <label class="form-check-label formdesign" for="Remember">Remember Password</label>
                                        </div>
                                    </div>
                                    <div class="col-5 d-flex flex-row-reverse ">
                                        <Link to="/" class="text-decoration-none text-dark formdesign">Forget Password?</Link>
                                    </div>
                                    <Link to="/menu/1" type="submit" class="btn btn-primary w-100 Signupbtn boldfont rounded mt-5 p-2" >Login</Link>
                                </div>
                    </form>

                    <hr/>
                            <div class="text-center formdesign">
                                Don't have an Account?  
                                <Link to="/signup" class="px-4 text-decoration-none text-dark formdesign">SIGN UP</Link>
                            </div>
                </div>
            </div>
            </div>
        </div>
    )
}