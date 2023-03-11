import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
//import { registerUser } from "../api";
// import { setAuthToken } from "../Helper/setAuthToken";

//import { registerUser } from '../api/index'


export const Register = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [token, setToken] = useState('');
  

   const registerUser = async(e) => {
    e.preventDefault();
    fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: username,
      password: password,
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log("register",result);
    // setToken(result.data.token)
    localStorage.setItem("token", result.data.token)
    console.log('token reg', result.data.token)
    localStorage.setItem("name:", username)
    localStorage.setItem("pw:", password)
    const newToken = localStorage.getItem('token')

  })
  .catch(console.error);

 
   }    
        
    
    return (
        <form onSubmit={registerUser} className="registration-container"
        >
            <div>
                <h2>Register</h2>
                <input 
                 type="text"
                 placeholder="Username"
                 className="register-input"
                 value={username} 
                 onChange={(e) => setUsername(e.target.value)} 
                />
                <br></br>
                <input
                 type="emal"
                 placeholder="Email"
                 className="register-input"
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)} 
                />
                <br></br>
                <input
                 type="password"
                 placeholder="Password"
                 className="register-input"
                 minLength={8} required
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)} 
                />
                <br>
                </br>
                <button type="submit">Register</button>
                <br>
                </br>
                <p><Link to="/login"> Log In Here! </Link> </p>

            </div>
        </form>
   
     )
}

   


