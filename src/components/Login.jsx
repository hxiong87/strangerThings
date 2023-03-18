import React, { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { login } from '../api'



export const Login = ({ setIsLoggedIn }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const navigate = useNavigate();

const handleSubmit = async(e) => {
    e.preventDefault();

    const result = await login(username, password);
    console.log("login token", result.data.token)
   
    if (result.success) {
        navigate('/profile')
    } else {
        console.log(result.error.message)
    }




}

   
return (
    <div className="form-container">
        
        <h1> Log In</h1>
        <form className="form"
           onSubmit={handleSubmit}
        >
       
            <input
                type="text"
                placeholder="Username"
                className="form-input"
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <br></br>
            <input
                    type="password"
                    placeholder="Password"
                    className="form-input"
                    minLength={8} required 
                    value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
            />
           <br></br>
            <button className="submit-form" type="submit" >Submit</button>
            <div className="register-container">
                <p>Don't have an acount?<Link to="/register"> Register Here! </Link> <span className='link' >
               
                </span>
                </p>
            </div>
        </form>

    </div>
)
}
