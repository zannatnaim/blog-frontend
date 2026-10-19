import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api';

function CreatePost({ token }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ title, content }, token).then(() => navigate('/'));
    };

    return (
        <div className="container">
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Write your post..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Publish</button>
            </form>
        </div>
    );
}

export default CreatePost;