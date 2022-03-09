import React from 'react';
import './../../App.css';
import './../../Css/Content.css'
import Sidenavbar from '../../Components/Sidenavbar';
import Content from './Content';



export default function Menu() {


  return (
  <div className='menu'>
     <Sidenavbar name={"Joshua Sacabon"}/>
    
        <div>
            <Content/>
        </div>
   
    </div>
  )
}
