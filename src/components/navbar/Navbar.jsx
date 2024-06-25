// import React, { useState } from 'react'
// import './Navbar.css'
// import logoo from '../assets/logo.png'

// const Navbar = () => {

//     const [menu, setMenu]=useState("About")
//   return (
//     <div className='navbar'> 

//       <div className='nav-logo'>
//         <img src={logoo} alt=""/>
//         {/* <p>Tanuja Devang</p> */}
//       </div>

//       <ul className="nav-menu">
//         <li onClick={()=>{setMenu("about")}}>About {menu==="about"? <hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("services")}}>Services {menu==="services"? <hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("blog")}}>Blog {menu==="blog"? <hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("instagram")}}>Instagram {menu==="instagram"? <hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("resources")}}>Resources {menu==="resources"? <hr/>:<></>}</li>
//       </ul>

//       <div className="touch">
//         <li>Get In Touch</li>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import './Navbar.css';
import logoo from '../assets/logo.png';

const Navbar = ({ scrollToSection, aboutRef , servicesRef, blogRef}) => {
  const [menu, setMenu] = useState("");

  return (
    <div className='navbar'> 
      <div className='nav-logo'>
        <img src={logoo} alt="logo" />
        {/* <p>Tanuja Devang</p> */}
      </div>

      <ul className="nav-menu">
        <li onClick={() => { setMenu("about"); scrollToSection(aboutRef); }}>
          About {menu === "about" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("services"); scrollToSection(servicesRef);}}>
          Services {menu === "services" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("blog");scrollToSection(blogRef); }}>
          Blog {menu === "blog" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("instagram"); }}>
          Instagram {menu === "instagram" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("resources"); }}>
          Resources {menu === "resources" ? <hr /> : null}
        </li>
      </ul>

      <div className="touch">
        <li>Get In Touch</li>
      </div>
    </div>
  );
};

export default Navbar;
