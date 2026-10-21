import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../api';

function Home({ token }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = () => {
        getPosts().then((res) => setPosts(res.data));
    };

    const handleDelete = (id) => {
        deletePost(id, token).then(() => loadPosts());
    };

    return (
        <div className="container">
            <h1>Blog Posts</h1>
            {posts.map((post) => (
                <div className="post-card" key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    {token && (
                        <div className="post-actions">
                            <Link to={`/edit/${post._id}`}>
                                <button className="edit-btn">Edit</button>
                            </Link>
                            <button className="delete-btn" onClick={() => handleDelete(post._id)}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Home;