import React from 'react';

interface TicketDisplayProps {
    passengerName: string;
    busDetails: string;
    seatNumber: string;
    transactionId: string;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({ passengerName, busDetails, seatNumber, transactionId }) => {
    return (
        <div className="ticket-display">
            <h1>Your Ticket</h1>
            <p><strong>Passenger Name:</strong> {passengerName}</p>
            <p><strong>Bus Details:</strong> {busDetails}</p>
            <p><strong>Seat Number:</strong> {seatNumber}</p>
            <p><strong>Transaction ID:</strong> {transactionId}</p>
        </div>
    );
};

export default TicketDisplay;