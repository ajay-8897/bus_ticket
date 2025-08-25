import React from 'react';
import TicketDisplay from '../components/Ticket/TicketDisplay';

const TicketPage: React.FC = () => {
    return (
        <div>
            <h1>Your Ticket</h1>
            <TicketDisplay
                passengerName="John Doe"
                busDetails="Bus 123, City A to City B"
                seatNumber="12A"
                transactionId="TXN123456"
            />
        </div>
    );
};

export default TicketPage;