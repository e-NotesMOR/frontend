import React,{useState} from "react";
import { Link } from 'react-router-dom';
import {FaUser,FaLock} from 'react-icons/fa';
import "./../../Css/Home.css"
// eslint-disable-next-line
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
            <div className="container-fluid ">
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
                                            <label className="form-check-label formdesign" for="Remember">Remember Password</label>
                                        </div>
                                    </div>
                                    <div className="col-5 d-flex flex-row-reverse ">
                                        <Link to="/" className="text-decoration-none text-dark formdesign">Forget Password?</Link>
                                    </div>
                                    <Link to="/menu/1" type="submit" className="btn btn-primary w-100 Signupbtn boldfont rounded mt-5 p-2" >Login</Link>
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