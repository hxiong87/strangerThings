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

  export const postMessage = async ({newToken, message, postID}) => {
    console.log('post m api', newToken)
    try {
      const response = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newToken}`
        },
        body: JSON.stringify({
          message
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.log(err);
    }
  }


export const addPost = async (newToken, {title, description, price, willDeliver})=> {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${newToken}`
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
      console.log('error creating a new post')
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