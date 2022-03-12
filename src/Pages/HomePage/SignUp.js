import React, { useState} from 'react';
import "./../../Css/Home.css"
import { Link,useHistory } from 'react-router-dom';
import { FaUserAlt,FaEnvelope,  FaLock } from "react-icons/fa"
import axios from 'axios';

export default function SignUp() {
    let [fullname,setFullname] = useState();
    let [email,setEmail] = useState();
    let [password,setPassword] = useState();
    let [rpass,setRequired] = useState();
    let backendUrl = process.env.REACT_APP_BACKEND_URL;

    const history = useHistory();
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(fullname, email,password);
        let user;
        if(fullname && email && ((password === rpass) && password )){
            try{
                user = await axios.post(`${backendUrl}/api/registers`,{email,password,userName:fullname})
            }catch(err){
                console.log(err)
            }
            if(user.data.access_token){
                localStorage.setItem('userName',user.data.userName)
                localStorage.setItem('userId',user.data.userId)
                localStorage.setItem('access_token',user.data.access_token)
                if(localStorage.getItem('access_token') &&localStorage.getItem('userId'),localStorage.getItem('userName'))
                    history.push('/menu/1');
            }

        }else{
            window.alert('Invalid credentials!');
        }
     
    }

  return (
      <div className="container-fluid pt-5">
          <div className="container-xl ">

                        <h3 className="text-center titleheader boldfont mt-5 pb-4">SIGNUP</h3>

                        <form className="container-fluid signupsize" onSubmit={handleSubmit} >

                        <div className="row g-2 align-items-center form-group"> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text p-3" id="basic-addon1">
                                                <FaUserAlt/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="Full Name" 
                                                aria-label="Fullname" 
                                                aria-describedby="basic-addon1" 
                                                id="fullname" 
                                                onChange={(e)=> setFullname(e.target.value)} required/>
                                    </div>
                                </div>

                            <div className="row g-2 align-items-center form-group"> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text p-3" id="basic-addon1">
                                                <FaEnvelope/>
                                            </span>
                                        </div>
                                        <input type="text" 
                                                className="form-control" 
                                                placeholder="Email" 
                                                aria-label="Email" 
                                                aria-describedby="basic-addon1" 
                                                id="Email" 
                                                onChange={(e)=> setEmail(e.target.value)} required/>
                                    </div>
                                </div>
                  

                            {/* <div className="row g-2 align-items-center form-group"> 
                              <select className="form-control form-control-lg mt-4" 
                                        onChange={(e)=> setPosition(e.target.value)}
                                        name="position">

                                <option value="Admin" >Admin</option>
                                <option value="Student">Student</option>
                                
                              </select>
                            </div> */}


                            <div className="row g-2 align-items-center form-group"> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text p-3" id="basic-addon1">
                                                <FaLock/>
                                            </span>
                                        </div>
                                        <input type="password" 
                                                className="form-control" 
                                                placeholder="Password" 
                                                aria-label="Password" 
                                                aria-describedby="basic-addon1" 
                                                id="Password" 
                                                onChange={(e)=> setPassword(e.target.value)} required/>
                                    </div>
                                </div>


                                <div className="row g-2 align-items-center form-group"> 
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text p-3" id="basic-addon1">
                                                <FaLock/>
                                            </span>
                                        </div>
                                        <input type="password" 
                                                className="form-control" 
                                                placeholder="Comfirm Password" 
                                                aria-label="Password" 
                                                aria-describedby="basic-addon1" 
                                                id="Password" 
                                                onChange={(e)=> setRequired(e.target.value)} required/>
                                    </div>
                                </div>


                            <button type="submit" className="btn btn-primary w-100 Signupbtn boldfont rounded mt-5 p-2" onClick={handleSubmit}>CREATE ACCOUNT</button>
                            {/* <p>Name: {fullname}</p>
                            <p>User: {username}</p>
                            <p>Position: {select}</p>
                            <p>Practitioner: {practitioner}</p>
                            <p>Pass: {password}</p> */}
                            <div className="SignUpTerms">
                                By clicking “<b>Create Account</b>” above, you acknowledge that you have read and understood, and agree to the <Link className="link-primary" to="#">Terms and Condition </Link>  and <Link to="#" className="link-primary">Privacy Policy</Link>
                            </div>
                            
                        </form>

                    </div>
                </div>
    )
}
