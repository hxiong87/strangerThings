import React, {useState, useEffect} from 'react';

import { getPosts, } from '../api';
import { CreatePost } from './CreatePost';
import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost';
import { MessageForm } from './MessageForm';




 
 const newToken = localStorage.getItem('token')


export const Profile = (props) => {
    const { newToken, fetchPosts, setNewPostsAdded } = props;
    const [posts, setPosts]= useState('');
    const [messages, setMessages] = useState([])

    
   
    
   console.log('profile getting hit')
   
    console.log('this in new token in profile', newToken)

    const getUserData = async () => {
       try {
         const resp = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/me', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${newToken}`
            }
        });
        const data = await resp.json();
        console.log('profile me data', data)

        console.log('profile me messages', data.data.messages)
        // return data
        setMessages(data.data.messages)
        console.log("data.messages",data.data.messages)
        
   
        // console.log('profile messages getting hit')
       
        
      
    } catch (err) {
        console.log("me error", err);
        // setPosts(data.data.posts);
      

    }

   
     
}
     

    useEffect (() => {
        getUserData();   
    },[newToken] )

   
 

    return (
        <div>
        <h1>WELCOME TO YOUR PROFILE</h1>
        <CreatePost fetchPosts={fetchPosts} newToken={newToken} setNewPostsAdded={setNewPostsAdded} posts={posts} setPosts={setPosts} />
          
       <p>VIEW SINGLE POST</p>
       <p>DELETE POST</p>
       {/* <button >Edit </button> */}
        <DeletePost newToken={newToken} />
       <br></br>
       <p>display user messages/ incoming and outgoing</p>
      
        { 
       
            messages && messages.map ( message => <div key={posts._id}>
                <p>Message: {messages.content}</p>
                </div>)
        }
   
    
       
             <MessageForm newToken={newToken} />
        
      
        </div>
    )
}





  
    

          
            
