import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <BrowserRouter basename="/blog-frontend">
      <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/create" element={<CreatePost token={token} />} />
        <Route path="/edit/:id" element={<EditPost token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;