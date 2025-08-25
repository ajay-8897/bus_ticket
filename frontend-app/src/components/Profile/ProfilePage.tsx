import React from 'react';

const ProfilePage: React.FC = () => {
    // Assuming user data is fetched from a context or state management
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        // Add more user fields as necessary
    };

    return (
        <div className="profile-page">
            <h1>User Profile</h1>
            <div className="profile-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                {/* Add more fields as necessary */}
            </div>
        </div>
    );
};

export default ProfilePage;