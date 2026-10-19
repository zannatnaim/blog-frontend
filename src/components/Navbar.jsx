import { Link, useNavigate } from 'react-router-dom';

function Navbar({ token, setToken }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="logo">My Blog</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                {token ? (
                    <>
                        <li><Link to="/create">New Post</Link></li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;