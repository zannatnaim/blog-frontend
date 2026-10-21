import axios from 'axios';

const API_URL = 'https://blog-backend-dt6z.onrender.com';
export const getPosts = () => axios.get(`${API_URL}/posts`);

export const createPost = (postData, token) =>
    axios.post(`${API_URL}/posts`, postData, {
        headers: { Authorization: token }
    });

export const updatePost = (id, postData, token) =>
    axios.put(`${API_URL}/posts/${id}`, postData, {
        headers: { Authorization: token }
    });

export const deletePost = (id, token) =>
    axios.delete(`${API_URL}/posts/${id}`, {
        headers: { Authorization: token }
    });

export const signup = (userData) =>
    axios.post(`${API_URL}/signup`, userData);

export const login = (userData) =>
    axios.post(`${API_URL}/login`, userData);