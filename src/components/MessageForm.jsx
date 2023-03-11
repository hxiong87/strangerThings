import React, { useState } from "react";
import { postMessage } from "../api";



export const MessageForm = ({newToken, postID}) => {
    const[message, setMessage]= useState('');
   

    const handleMessage = async (e) => {
        e.preventDefault();
        await postMessage({newToken, message, postID},)
        console.log('message token', newToken)
        console.log('message:', message)
        
    }

    return (
        <form onSubmit={handleMessage} >
        <h2>Send Message</h2>
        <input 
        type="text" 
        value={message} 
        onChange={(event) => {setMessage(event.target.value);}} 
        placeholder="Type message here">       
        </input>

        <button className="btn-message" type="submit">Send Message</button>
        </form>

    )
}