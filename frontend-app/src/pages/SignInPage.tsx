import React from 'react';
import SignIn from '../components/Auth/SignIn';
import SignUpPage from './SignUpPage';

const SignInPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start', padding: '2rem' }}>
            <div style={{ minWidth: 320 }}>
                <h1>Sign In</h1>
                <SignIn />
            </div>
            <div style={{ minWidth: 320 }}>
                <h2>Sign Up</h2>
                <SignUpPage />
            </div>
        </div>
    );
};

export default SignInPage;