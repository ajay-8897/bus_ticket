import React, { useState } from 'react';
import SignIn from '../components/Auth/SignIn';
import SignUpPage from './SignUpPage';

const SignInPage: React.FC = () => {
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                minHeight: '80vh'
            }}
        >
            <div
                style={{
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                    padding: '2rem',
                    minWidth: 340,
                    maxWidth: 400,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <h2 style={{ marginBottom: '1.5rem', color: 'red' }}>Create or Login Account</h2>
                {showSignUp ? (
                    <SignUpPage />
                ) : (
                    <SignIn onShowSignUp={() => setShowSignUp(true)} />
                )}
            </div>
        </div>
    );
};

export default SignInPage;