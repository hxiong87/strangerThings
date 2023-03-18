const COHORT_NAME = '2211-FTB-ET-WEB-PT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`



export const getPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`)
  
      const result = await response.json();
    //   console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }



  export const login = async (username, password) => {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          }
        })
      });
      const result = await response.json();
      console.log("login api result",result);
      return result
    } catch (err) {
      console.error(err);
    }
  }



  export const myData= async () => {
    try {
        const token = localStorage.getItem('token');
      const resp = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/users/me', {
         method: "GET",
         headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
         }
     });
     const data = await resp.json();
     console.log('profile me data', data);
     return data
    } catch (err) {
      console.log(err);
    }
}



export const postMessage = async ({postID, message}) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message 
        : {
          content: message.content
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}




  export const addPost = async ( {title, description, price, location, willDeliver}) => {
    const token = localStorage.getItem('token')
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price ,
            location,
            willDeliver 
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }



  export const updatePost = async ({token, title, description, price, willDeliver, postID})=> {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postID}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver
          }
        })
      })
      
      const result = await response.json();
      return result;  
    } catch(error) {
      console.log('error update')
    }
  }


  export const deletePost = async (postID) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${BASE_URL}/posts/${postID}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }