import React, { useState, useEffect } from 'react';
import {  } from '../api'

import { MessageForm , SearchPosts} from '../components'

const COHORT_NAME = '2211-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const Posts = (newToken) => {
    const [posts, setPosts] = useState ([]);
    // console.log('posts:', posts)


useEffect(() => {
const fetchPosts = async () => {
    const resp = await fetch(`${BASE_URL}/posts`)
        const {data} = await resp.json();
        // console.log ('data:',data)

        setPosts(data.posts)
    }
   
    fetchPosts();
}, [])
   

return (
    <div>
       
    <h1> POSTS</h1>

    <SearchPosts posts={posts} />
    <div className="post">
     {
        posts.map ( posts => <div key={posts._id}>
            
            <h2>{posts.title}</h2>
            <p>{posts.description}</p>
            <p>{posts.price}</p>
           
            {/* <MessageForm newToken={newToken} />
         */}
           

           <hr></hr>
           </div> )
     }

    </div>
      
    </div>
    )

}