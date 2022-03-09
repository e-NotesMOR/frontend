import React, { useState} from 'react';
import "./../../Css/Home.css"
import { Link } from 'react-router-dom';
import { FaUserAlt,FaEnvelope, FaIdBadge, FaLock } from "react-icons/fa"

export default function SignUp() {
    let [fullname,setFullname] = useState();
    let [email,setEmail] = useState();
    let [username,setUsername] = useState();
    // let [position,setPosition] = useState();
    let [password,setPassword] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(fullname, email, username, /*position,*/password);
    }

  return (
      <div class="container-fluid pt-5">
          <div class="container-xl ">
                        <h3 class="text-center titleheader boldfont mt-5 pb-4">SIGNUP</h3>

                        <form className="container-fluid signupsize" onSubmit={handleSubmit} >

                        <div class="row g-2 align-items-center form-group"> 
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text p-3" id="basic-addon1">
                                                <FaUserAlt/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                class="form-control" 
                                                placeholder="Fullname" 
                                                aria-label="Fullname" 
                                                aria-describedby="basic-addon1" 
                                                id="fullname" 
                                                onChange={(e)=> setFullname(e.target.value)} required/>
                                    </div>
                                </div>

                            <div class="row g-2 align-items-center form-group"> 
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text p-3" id="basic-addon1">
                                                <FaEnvelope/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                class="form-control" 
                                                placeholder="Email" 
                                                aria-label="Email" 
                                                aria-describedby="basic-addon1" 
                                                id="Email" 
                                                onChange={(e)=> setEmail(e.target.value)} required/>
                                    </div>
                                </div>
                            
                                <div class="row g-2 align-items-center form-group"> 
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text p-3" id="basic-addon1">
                                                <FaIdBadge/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                class="form-control" 
                                                placeholder="Username" 
                                                aria-label="Username" 
                                                aria-describedby="basic-addon1" 
                                                id="Username" 
                                                onChange={(e)=> setUsername(e.target.value)} required/>
                                    </div>
                                </div>

                            {/* <div class="row g-2 align-items-center form-group"> 
                              <select class="form-control form-control-lg mt-4" 
                                        onChange={(e)=> setPosition(e.target.value)}
                                        name="position">

                                <option value="Admin" >Admin</option>
                                <option value="Student">Student</option>
                                
                              </select>
                            </div> */}


                            <div class="row g-2 align-items-center form-group"> 
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text p-3" id="basic-addon1">
                                                <FaLock/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                class="form-control" 
                                                placeholder="Password" 
                                                aria-label="Password" 
                                                aria-describedby="basic-addon1" 
                                                id="Password" 
                                                onChange={(e)=> setPassword(e.target.value)} required/>
                                    </div>
                                </div>


                                <div class="row g-2 align-items-center form-group"> 
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text p-3" id="basic-addon1">
                                                <FaLock/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                class="form-control" 
                                                placeholder="Comfirm Password" 
                                                aria-label="Password" 
                                                aria-describedby="basic-addon1" 
                                                id="Password" 
                                               />
                                    </div>
                                </div>


                            <Link to="/"  type="submit" class="btn btn-primary w-100 Signupbtn boldfont rounded mt-5 p-2" >CREATE ACCOUNT</Link>
                            {/* <p>Name: {fullname}</p>
                            <p>User: {username}</p>
                            <p>Position: {select}</p>
                            <p>Practitioner: {practitioner}</p>
                            <p>Pass: {password}</p> */}
                            <div class="SignUpTerms">
                                By clicking “<b>Create Account</b>” above, you acknowledge that you have read and understood, and agree to the <Link class="link-primary">Terms and Condition </Link>  and <Link href="#" class="link-primary">Privacy Policy</Link>
                            </div>
                            
                        </form>

                    </div>
                </div>
    )
}
