import React from 'react';
import SignIn from '../components/Auth/SignIn';

const SignInPage: React.FC = () => {
    return (
        <div className="container">
            <h1>Sign In</h1>
            <SignIn />
        </div>
    );
};

export default SignInPage;