

import React, {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addPost, getPosts} from "../api";


const BlankPost =  {
    title: '',
    description: '',
    price: '',
    location: '',
    willDeliver: false
}
export const CreatePost = (props) => {
  const [post, setPost] = useState(BlankPost);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(true);
  const [newPostsAdded, setNewPostsAdded] = useState(false)
 const { newToken, posts, setPosts, fetchPosts} = props
 


const handleAddPost = async () => {
  const data = await getPosts({url: '/posts', body: { post },  method: 'POST', newToken, });
  console.log('create function is being handled', data)
  if(data && data.success) {
   
  
    const {data:{posts}} = await getPosts({url: `/posts`, newToken});
    await setNewPostsAdded(true);
    console.log('create', data)
   
    const fetchPosts = async () => {
      const resp = await fetch ('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts');
      const {data}= await resp.json();
      
      setPosts( data.posts);
      console.log("createPost", data.posts)

  }
  fetchPosts();
     
    }     
  }



   
    return (
        <div className="newPostForm">
        <form onSubmit={(e) => {
        e.preventDefault();
        handleAddPost(); 
        
        }}>
            <h1>New Post</h1>
        <label>
        
          <input 
          type="text" 
          name="name" 
          placeholder="Title" 
          value={post.title}
          onChange={(event) => { setPost({...post, title: event.target.value}) }}/>
        
          <input 
          type="text" 
          name="name" 
          placeholder="Description" 
          value={post.description}
          onChange={(event) => { setPost({...post, description: event.target.value}) }}/>
        
          <input 
          type="text" 
          name="name" 
          placeholder="Price"
          value={post.price}
          onChange={(event) => { setPost({...post, price: event.target.value}) }}/>
         
          <span>
          <input 
          type="radio" 
          name="willDeliver" 
          placeholder="willDeliver"
          value={post.willDeliver}
          onChange={(event) => { setPost({...post, willDeliver: event.target.value}) }}/>
           <label  type='checkbox'
                checked={willDeliver}>Will Deliver</label>
           </span>
           <br></br>
          <button type='submit'>Create</button>
        </label>
        <br></br>
        
      </form>
      </div>
    )
  }


   
  
  