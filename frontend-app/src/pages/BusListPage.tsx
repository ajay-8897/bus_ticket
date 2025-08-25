import React from 'react';
import BusList from '../components/Buses/BusList';

const BusListPage: React.FC = () => {
    return (
        <div>
            <h1>Available Buses</h1>
            <BusList />
        </div>
    );
};

export default BusListPage;