import React from 'react';
import BusList from '../components/Buses/BusList';

const BusListPage: React.FC = () => {
    return (
        <div>
            {/* Ensure this is rendered */}
            <h1 style={{ textAlign: 'center', margin: '2rem 0', color: '#222' }}>Available Buses</h1>
            <BusList />
        </div>
    );
};

export default BusListPage;