import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../api';

function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                setToken(res.data.token);
                navigate('/');
            })
            .catch(() => setError('Invalid username or password.'));
    };

    return (
        <div className="container">
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>
                No account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
}

export default Login;