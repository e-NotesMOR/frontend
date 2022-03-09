import React from 'react';
import './../../App.css';
import './../../Css/Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

export default function Home() {
  return (
    <>
     <Navbar/>
      <div className='home'>

        <div className="container-fluid ">
          <div className="col-lg-12">
                    <div className="main">
                        <div className="Headerhome borderstyle p-5">
                        "One day I will find the right words, and they will be simple."
                        </div>
                        <div className="">
                            <Link className="text-decoration-none btn btn-primary buttonhome p-3 mt-5" to="/Signup">get started</Link>
                        </div>
                    </div>
                </div>
           

        </div>

      </div>

    </>
  );
}
