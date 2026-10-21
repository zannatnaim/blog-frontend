import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPosts, updatePost } from '../api';

function EditPost({ token }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        getPosts().then((res) => {
            const post = res.data.find((p) => p._id === id);
            if (post) {
                setTitle(post.title);
                setContent(post.content);
            }
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(id, { title, content }, token).then(() => navigate('/'));
    };

    return (
        <div className="container">
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditPost;