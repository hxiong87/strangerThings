import React, { useState } from 'react';
import { updatePost } from '../api';

export const EditPost= ({ posts, token, postID }) => {
    

    const [currentPost] = posts.filter(post => post._id === postID);

    const { title, description, location, price, willDeliver, } = currentPost;

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newLocation, setNewLocation] = useState(location);
    const [newPrice, setNewPrice] = useState(price);
    const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);

    async function handleEdit() {
        const editedPost = {
            token: token,
            title: newTitle,
            description: newDescription,
            location: newLocation,
            price: newPrice,
            willDeliver: newWillDeliver,
            _id: postID
        }
        await updatePost(editedPost)
    }

    return (
        <div>
        <form onSubmit={(event) => {
            event.preventDefault();
            handleEdit();
        } }>
            <input
                type='text'
                placeholder={title}
                onChange={(event) => setNewTitle(event.target.value)} />
            <input
                type='text'
                placeholder={description}
                onChange={(event) => setNewDescription(event.target.value)} />
            <input
                type='text'
                placeholder={location}
                onChange={(event) => setNewLocation(event.target.value)} />
            <input
                type='text'
                placeholder={price}
                onChange={(event) => setNewPrice(event.target.value)} />
            <input
                type='checkbox'
                checked={newWillDeliver}
                onChange={(event) => setNewWillDeliver(event.target.checked)} />
            <button type='submit'>Edit Post</button>
        </form>
        </div>
    )
}