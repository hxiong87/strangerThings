import React, { useState, useEffect} from 'react';
import { getPosts } from '../api';

export const SearchPosts = (props) => {

  const {posts, setPosts } = props;
  
  

   
  const postMatches = (post,searchTerm) => {
      if(post.title.includes(searchTerm) || post.description.includes(searchTerm)) {
          return true;
      } else {
          return false;
      }
  }

const [searchTerm, setSearchTerm] = useState('');
const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
console.log("filter",filteredPosts);
console.log("search", searchTerm);





const handleSearch = (event) => {

 const searchvalue =  event.target.value;
 setSearchTerm(searchvalue)
}   

const handleClickSearch = (event) => {
  event.preventDefault();
}



return (
  <div>
      
      <input 
      value={searchTerm} 
      onChange={handleSearch} />
      <button onClick={handleClickSearch}>SEARCH</button>
      <div>
          { filteredPosts.map((post) => (
          
             <> 
              <p key={post.id}>{post.title}</p>
              <p key={post.id}>{post.description}</p> 
              <hr></hr>
              </> 
        
          ))}
      </div>
          
      
  </div>
)
}











