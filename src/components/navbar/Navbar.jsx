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

/*import React, { useState } from 'react';
import './Navbar.css';
import logoo from '../assets/logo.png';

const Navbar = ({ scrollToSection, aboutRef , servicesRef, blogRef}) => {
  const [menu, setMenu] = useState("");

  return (
    <div className='navbar'> 
      <div className='nav-logo'>
        <img src={logoo} alt="logo" />
        { <p>Tanuja Devang</p> }
      </div>

      <ul className="nav-menu">
        <li onClick={() => { setMenu("about"); scrollToSection(aboutRef); }} className='nav-item'>
          About {menu === "about" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("services"); scrollToSection(servicesRef);}}  className='nav-item'>
          Services {menu === "services" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("blog");scrollToSection(blogRef); }} className='nav-item'>
          Blog {menu === "blog" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("instagram"); }} className='nav-item'>
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
*/
import React, { useState } from 'react';
import './Navbar.css';
import logoo from '../assets/logo.png';

const Navbar = ({ scrollToSection, aboutRef, servicesRef, blogRef }) => {
  const [menu, setMenu] = useState("");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logoo} alt="logo" />
        {/* <p>Tanuja Devang</p> */}
      </div>

      <ul className="nav-menu">
        <li onClick={() => { setMenu("about"); scrollToSection(aboutRef); }} className={`nav-item ${menu === "about" ? 'active' : ''}`}>
          About
        </li>
        <li onClick={() => { setMenu("services"); scrollToSection(servicesRef); }} className={`nav-item ${menu === "services" ? 'active' : ''}`}>
          Services
        </li>
        <li onClick={() => { setMenu("blog"); scrollToSection(blogRef); }} className={`nav-item ${menu === "blog" ? 'active' : ''}`}>
          Blog
        </li>
        <li onClick={() => { setMenu("instagram"); }} className={`nav-item ${menu === "instagram" ? 'active' : ''}`}>
          Instagram
        </li>
        <li onClick={() => { setMenu("resources"); }} className={`nav-item ${menu === "resources" ? 'active' : ''}`}>
          Resources
        </li>
      </ul>

      <div className="touch">
        <li onClick={() => { setMenu("resources"); }} className={`nav-item ${menu === "resources" ? 'active' : ''}`}>Get In Touch</li>
      </div>
    </div>
  );
};

export default Navbar;
