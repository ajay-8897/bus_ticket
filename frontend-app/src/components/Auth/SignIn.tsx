import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../utils/auth';

interface SignInProps {
    onShowSignUp?: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onShowSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const res = await signIn(email, password);
            if (res && res.success) {
                // Set signed-in flag and username for NavBar
                localStorage.setItem('signedIn', 'true');
                localStorage.setItem('username', res.userName || '');
                history.push('/buslistpage');
            } else {
                setError('Login failed. Please try again.');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Sign In</button>
            </form>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <span>Don't have an account? </span>
                <span
                    style={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={onShowSignUp}
                >
                    Sign Up
                </span>
            </div>
        </div>
    );
};

export default SignIn;