import React from 'react';
import TicketDisplay from '../components/Ticket/TicketDisplay';

const TicketPage: React.FC = () => {
    return (
        <div>
            <h1>Your Ticket</h1>
            <TicketDisplay />
        </div>
    );
};

export default TicketPage;