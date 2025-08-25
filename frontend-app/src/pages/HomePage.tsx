import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h1>Welcome to Bus Booking System</h1>
            <p>Please sign in or create an account to continue.</p>
            <div style={{ marginTop: '32px' }}>
                <Link to="/signin">
                    <button style={{ marginRight: '16px' }}>Login</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
