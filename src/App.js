import { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {
  Navbar, 
  Posts, 
  Login,
  Register,
  Profile, 
  CreatePost,
  EditPost,
  } from './components'
import { getPosts } from './api';
import { MessageForm } from './components/MessageForm';


function App() {

  // const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]); 
  const [newPostsAdded, setNewPostsAdded] = useState(false);
  const newToken = localStorage.getItem('token')


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setPosts();
  //   },5000);

  //   return () => clearTimeout(timer);
  // }, []);



   async function fetchPosts() {
        const resp = await getPosts(newToken)
            
    
            setPosts(resp.data.posts)
        }
       
       
 
       
   





  return (
    <div className="container">
  
       <Navbar /> 
  
    <div className="row">
    
      <div className="column">
        <main>
          {/* <Routes>
          <Route
          path='/'
          element={   <Posts newToken={newToken} />}/>
        
          </Routes> */}
          <Posts newToken={newToken} />
          
     </main>
      </div>
        <aside className="col">
         
          <Routes>
            <Route
            path='/login'
            element={ <Login newToken={newToken}/>}/>

            <Route
            path='/Register'
            element={ <Register newToken={newToken} />}>
            </Route>
          
           
            {/* <Route
            path=''
            element={  <CreatePost fetchPosts={fetchPosts} newToken={newToken} setNewPostsAdded={setNewPostsAdded} posts={posts} setPosts={setPosts} />}/>
           */}
            <Route
            path="/profile"
            element={ <Profile newToken={newToken}/>}/>

            <Route
            path="/profile"
            element={ <MessageForm newToken={newToken} />}/>
           
         </Routes>
    
          </aside>
     </div>
   
    <footer>
    </footer>
  
  </div>
  );
}

export default App;
