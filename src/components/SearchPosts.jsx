import React, { useState } from 'react';

export const SearchPosts = () => {


 

    const handleChange = (event) => {
     
    }

    const handleSubmit = (event) => {
        event.preventDefault();

     
      
       
    }
 
    return (
    <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={(handleChange)}/>
          
          <button type='submit'>Search</button>
     </form>

    )
 
}