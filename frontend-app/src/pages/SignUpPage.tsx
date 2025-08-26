import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../utils/auth';
import SignIn from '../components/Auth/SignIn';

const SignUpForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await registerUser(username, email, password);
            setRegistered(true);
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    if (registered || showSignIn) {
        return (
            <SignIn onShowSignUp={() => setShowSignIn(false)} />
        );
    }

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <span>Do you have an account? </span>
                <span
                    style={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => setShowSignIn(true)}
                >
                    Sign In
                </span>
            </div>
        </div>
    );
};

export default SignUpForm;