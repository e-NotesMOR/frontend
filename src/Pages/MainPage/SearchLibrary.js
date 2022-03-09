import React from 'react';
import './../../App.css';
import { Link } from 'react-router-dom';
import {FaSearch,FaBookOpen } from 'react-icons/fa';


export default function SearchLibrary() {
  return (
  <div className='dashboard yoverflow'> 
    <div className='libcontent container'> 
      <div className='homesize '> 
                <div className="row container  ">
                  <div className='LibFont'>
                    <FaBookOpen style={{fontSize:"20rem"}} />
                    <div class="Textsearchlib">
                      Search in Library
                    </div>
                    <div>
                      <input class="form-control form-control-md container-fluid libraryinput" 
                                    type="text" 
                                    name="code" 
                                    id="code" 
                                    placeholder="udp-ctxp-cue" />
                      <Link to="/user" type="submit" class="btn btn-primary rounded roombutton" >
                                      Search <FaSearch style={{fontSize:"1.5rem"}} />
                                    </Link>
                    </div>

                  </div>
                       
                </div>
          </div>
    </div>

  </div>
    )
}
