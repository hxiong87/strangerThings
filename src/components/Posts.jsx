import React, { useState, useEffect } from 'react';
import { deletePost, getPosts, postMessage } from '../api'
import {Link} from 'react-router-dom'

import {  SearchPosts, MessageForm} from '../components'


const COHORT_NAME = '2211-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const Posts = () => {
    const [posts, setPosts] = useState ([]);
    const token = localStorage.getItem('token');
    const [message, setMessage] = useState({content:''});
    const [content, setContent]= useState('')
    
  



useEffect(() => {
const fetchPosts = async () => {
  
    const posts = await getPosts();
    setPosts(posts.data.posts)
    }
   
    fetchPosts();
}, [])


const handleDelete = async (postIdToDelete ) => {
console.log('this is getting hit')
    // const token = localStorage.getItem('token');
    
    const deleted = await deletePost(postIdToDelete)
    console.log('deleted', deleted)
    window.location.reload();
    return deleted;
}


async function handleMessage(postID) {

    const result = await postMessage({postID, message})
    console.log('message', result)
    setMessage();
 

}
   


    

return (
    <div>
       
        <h1> POSTS</h1>
 

        {/* <SearchPosts  posts={posts} setPosts={setPosts}/> */}
        <hr></hr>
             <div className="post">
            {
                 posts.map ( posts => <div key={posts._id}>
      
                     <h2>{posts.title}</h2>
                    <p>{posts.description}</p>
                    <p>{posts.price}</p>
                  
             <br></br>
             <form onSubmit={(event) => {
            event.preventDefault();
            handleMessage(posts._id);
            
        } }>    
             <input
                 type="text"
                 placeholder="Enter Message"
                 onChange={(event) => setMessage({content: event.target.value})} 
                />
                <button type="submit">Submit</button>
            </form>
                <br>
                </br>
                        

                    <button onClick={(event) => { handleDelete( posts._id) }}>Delete Post </button> 
             

           <hr></hr>
           </div>
            )
            }

             </div>
      
    </div>
    )



}