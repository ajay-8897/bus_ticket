import React from 'react';

const ProfilePage: React.FC = () => {
    // Sample user data, replace with actual data from state or props
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        city: 'New York',
    };

    return (
        <div className="profile-page">
            <h1>User Profile</h1>
            <div className="profile-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>City:</strong> {user.city}</p>
            </div>
        </div>
    );
};

export default ProfilePage;