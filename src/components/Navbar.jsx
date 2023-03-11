import React from "react";
import logoicon from  '/Users/leeka/stranger-things-new/src/STRANGER-5.png';
import { Link , useNavigate } from "react-router-dom";

// import {BrowserRouter, Route, Routes} from 'react-router-dom'


export const Navbar = () => {
    const navigate = useNavigate;
    const handleLogout = () => {
        // setUser({})
        // setToken('')
        localStorage.clear('token')
        navigate('/')
      }
    

  
    return (
    <div className="main-nav">
       
      <header>
        <nav className="nav">
            <img src={logoicon} alt="Web Logo"/> 
        
            <ul className="nav-items">
                
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout} className="links">Logout</Link></li>
                
            </ul>
          
         </nav>
      
      </header>
    </div>
    )
 
}