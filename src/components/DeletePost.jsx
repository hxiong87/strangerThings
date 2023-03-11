import React from "react";

export const DeletePost = ( {newToken,postId, posts, setPosts}) => {

    const handleDelete = async (id) => {
        const resp = await fetch(`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-pt/posts/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${newToken}`
            }
        })
        const data  = await resp.json();
        console.log('delete:', data)
        if (data.success){
            const newPosts = posts.filter(post => post._id !== postId);
            setPosts(newPosts)
            console.log(newPosts)
    }
}
            return (
            <button className="button-delete" onClick={() => handleDelete(newToken, postId)}>Delete</button>
    )

}