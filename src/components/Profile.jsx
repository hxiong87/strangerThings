import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'


import { getPosts, myData} from '../api';
// import { CreatePost } from './CreatePost';






 
 const token = localStorage.getItem('token')


export const Profile = (props) => {
    const [messages, setMessages] = useState([]);
   const token = localStorage.getItem('token');
    const username = localStorage.getItem('name:');
    const { fetchPosts, setNewPostsAdded, user, posts } = props;

 




    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await myData()
            setMessages(userData.data.messages);
            console.log(userData.data.messages)
           
        }
      
        fetchUserData();
    },[])
   
    return (
        <div>
 
          <h1>WELCOME TO YOUR PROFILE {`${username}`}</h1>
          <br></br>
          <h3>Messages</h3>
           {
             messages.map(message => {
          


                    return (
                            <div key={message._id}>
                                <p>Post Reference: {message.post.title}</p>
                                <p>From User: {message.fromUser.username} </p>
                                <p>Message: {message.content}</p>
                                <hr></hr>
                              
                            </div>
                    )

                    
                    })
                    } 


           
        
        
   

             
 
        </div>
    )
  
}




