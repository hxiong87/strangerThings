import React, {  useEffect, useState } from "react";
import {  useNavigate} from 'react-router-dom';
import { addPost} from "../api";
import { Posts } from "./Posts";

export const CreatePost = ({ setPosts }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const navigate = useNavigate

    const blankPost = {
        title,
        description,
        price,
        location,
        willDeliver: false
    }

    async function handleAddPost() {

        const data = await addPost({ title: title, description: description, price: price, location: location, willDeliver: false })
        console.log('add post ', data)
    
        setPosts(data);  
        window.location.reload();

  
    }
    
   
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
           
            handleAddPost();
            
 
           
        }}>
            <h3>Create a New Post</h3>
            <input
                name='title'
                placeholder="Title"
                type='text'
                onChange={(e) => setTitle(e.target.value)} />
            <br></br>
            
            <input
                name='description'
                placeholder="Description"
                type='text'
                onChange={(e) => setDescription(e.target.value)} />
            <br></br>
            
            <input
                name='price'
                placeholder="Price"
                type='text'
                onChange={(e) => setPrice(e.target.value)} />
            <br></br>

            
            <input
                name='location'
                placeholder="Location"
                type='text'
                onChange={(e) => setLocation(e.target.value)} />
            <br></br>

            <input 
                name='willDeliver?'
                type="radio" 
                onChange={(e) => setWillDeliver(e.target.value)} />
            <label>Will Deliver?</label>
            <br></br>
            <button type='submit' >Create Post</button>
        </form>
    )
}




