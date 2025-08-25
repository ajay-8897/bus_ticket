import React from 'react';
import SignIn from '../components/Auth/SignIn';
import SignUpPage from './SignUpPage';

const SignInPage: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '2rem',
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
                <h1 style={{ marginBottom: '1.5rem', color: '#d32f2f' }}>Login Account</h1>
                <SignIn />
            </div>
            <div
                style={{
                    width: '2px',
                    background: 'linear-gradient(to bottom, #ffd700 0%, #d32f2f 100%)',
                    minHeight: '340px',
                    alignSelf: 'center'
                }}
            />
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
                <h2 style={{ marginBottom: '1.5rem', color: '#1976d2' }}>Create Account</h2>
                <SignUpPage />
            </div>
        </div>
    );
};

export default SignInPage;