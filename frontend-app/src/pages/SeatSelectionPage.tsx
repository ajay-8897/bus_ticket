import React from 'react';
import SeatSelection from '../components/Seats/SeatSelection';

const SeatSelectionPage: React.FC = () => {
    return (
        <div>
            <h1>Select Your Seats</h1>
            <SeatSelection />
        </div>
    );
};

export default SeatSelectionPage;