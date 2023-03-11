import React, { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { login } from '../api'



export const Login = () => {

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


//   const response = await  fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/login', {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json',
    
//   },
//   body: JSON.stringify({
//     user: {
//       username: username,
//       password: password,
//     }
//   })

// });
// const result = await response.json();
// console.log("login result", result)
// console.log("login token", result.data.token)
// navigate('/profile')



// }).then(response => response.json())
//   .then(result => {
//     // localStorage.setItem("tokenLogin:", result.data.token)
//     console.log("lofin token", result.data.token)
      

//     // navigate('/profile')
  
//   })
//   .catch(console.error);

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
