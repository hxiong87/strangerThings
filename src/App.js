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
  SearchPosts,


  } from './components'




function App() {

  // const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]); 
  const [newPostsAdded, setNewPostsAdded] = useState(false);
  const newToken = localStorage.getItem('token');
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] =useState(true);


  useEffect(() => {
    if (localStorage.getItem("token")) {
        setIsLoggedIn(true);
    }
}, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setPosts();
  //   },5000);

  //   return () => clearTimeout(timer);
  // }, []);


  useEffect(() => {
    if (localStorage.getItem("token")) {
        setIsLoggedIn(true);
    }
}, []);



       
 
       
   





  return (
    <div className="container">
 
    <Navbar /> 
       
    <div className="row">
    
      <div className="column">
        <main>
         
        
         <Routes>
             <Route
             path='/' 
             element={<Posts />}/>

        

        
          
         
         </Routes>
     </main>
      </div>
        <aside className="col">
         
          <Routes>
        
            <Route
            path='/login'
            element={ <Login token={token}/>}/>

            <Route
            path='/Register'
            element={ <Register newToken={newToken} />}>
            </Route>

            <Route
            path='/'
            element={    <CreatePost  token={token} setNewPostsAdded={setNewPostsAdded} posts={posts} setPosts={setPosts} /> }/>
          

            <Route
            path="/profile"
            element={ <Profile token={token}/>}/>

       
         </Routes>
    
          </aside>
     </div>
   
    <footer>
    </footer>
  
  </div>
  );
}

export default App;
