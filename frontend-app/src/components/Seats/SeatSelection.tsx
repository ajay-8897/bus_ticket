import React, { useState } from 'react';

const SeatSelection: React.FC = () => {
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
    const totalSeats = 30; // Example total seats available

    const handleSeatClick = (seatNumber: number) => {
        setSelectedSeats(prevSelected => {
            if (prevSelected.includes(seatNumber)) {
                return prevSelected.filter(seat => seat !== seatNumber);
            } else {
                return [...prevSelected, seatNumber];
            }
        });
    };

    return (
        <div>
            <h2>Select Your Seats</h2>
            <div className="seat-selection">
                {Array.from({ length: totalSeats }, (_, index) => (
                    <div
                        key={index}
                        className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
                        onClick={() => handleSeatClick(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
            <div>
                <h3>Selected Seats: {selectedSeats.join(', ')}</h3>
            </div>
        </div>
    );
};

export default SeatSelection;