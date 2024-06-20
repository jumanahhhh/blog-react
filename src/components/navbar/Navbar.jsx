import React, { useState } from 'react'
import './Navbar.css'
import logoo from '../assets/logo.png'

const Navbar = () => {

    const [menu, setMenu]=useState("About")
  return (
    <div className='navbar'> 

      <div className='nav-logo'>
        <img src={logoo} alt=""/>
        <p>XYZ</p>
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("about")}}>About {menu==="about"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("services")}}>Services {menu==="services"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("blog")}}>Blog {menu==="blog"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("instagram")}}>Instagram {menu==="instagram"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("resources")}}>Resources {menu==="resources"? <hr/>:<></>}</li>
      </ul>

      <div className="touch">
        <li>Get In Touch</li>
      </div>
    </div>
  )
}

export default Navbar
