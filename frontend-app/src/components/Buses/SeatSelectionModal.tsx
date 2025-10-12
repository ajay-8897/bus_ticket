import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface Seat {
  seatNumber: number;
  isBooked: boolean;
}

interface SeatSelectionModalProps {
  bus: any;
  onClose: () => void;
}

const mockFetchSeats = async (busId: number): Promise<Seat[]> => {
  // Replace with real API call if available
  return Array.from({ length: 40 }, (_, i) => ({
    seatNumber: i + 1,
    isBooked: Math.random() < 0.2
  }));
};

const getSeatRows = (seats: Seat[]) => {
  // 4 seats per row: 2 left, aisle, 2 right
  const rows: (Seat | null)[][] = [];
  for (let i = 0; i < seats.length; i += 4) {
    rows.push([
      seats[i] || null,
      seats[i + 1] || null,
      seats[i + 2] || null,
      seats[i + 3] || null
    ]);
  }
  return rows;
};

const SeatSelectionModal: React.FC<SeatSelectionModalProps> = ({ bus, onClose }) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const history = useHistory();

  useEffect(() => {
    mockFetchSeats(bus.id).then(setSeats);
  }, [bus.id]);

  const handleSelectSeat = (seatNumber: number) => {
    setSelectedSeats(prev =>
      prev.includes(seatNumber)
        ? prev.filter(num => num !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleBookSeat = () => {
    if (!selectedSeats.length) return;
    // Store selected seats in localStorage or pass via navigation state
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    localStorage.setItem('selectedBus', JSON.stringify(bus));
    onClose();
    history.push('/payment');
  };

  const seatRows = getSeatRows(seats);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 12,
        padding: 20,
        minWidth: 320,
        maxWidth: 370,
        width: '92vw',
        maxHeight: '85vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 4px 24px rgba(0,0,0,0.16)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            right: 12,
            top: 12,
            fontSize: 22,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            color: '#888',
            fontWeight: 700,
            lineHeight: 1
          }}
          aria-label="Close"
        >×</button>
        <h2 style={{ fontSize: '1.15rem', marginBottom: 18 }}>Select Seat(s) for {bus.bus_number || bus.bus_name || bus.name}</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          margin: '24px 0',
          alignItems: 'center'
        }}>
          {seatRows.map((row, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              {/* Left 2 seats */}
              {row.slice(0, 2).map((seat, i) =>
                seat ? (
                  <button
                    key={seat.seatNumber}
                    disabled={seat.isBooked}
                    onClick={() => handleSelectSeat(seat.seatNumber)}
                    style={{
                      width: 40, height: 40,
                      background: seat.isBooked
                        ? '#ccc'
                        : (selectedSeats.includes(seat.seatNumber) ? '#4caf50' : '#fff'),
                      border: '1.5px solid #888',
                      borderRadius: 8,
                      cursor: seat.isBooked ? 'not-allowed' : 'pointer',
                      fontWeight: 600,
                      marginRight: i === 1 ? 0 : 8
                    }}
                  >
                    {seat.seatNumber}
                  </button>
                ) : <div key={i} style={{ width: 40, height: 40 }} />
              )}
              {/* Aisle */}
              <div style={{ width: 32 }} />
              {/* Right 2 seats */}
              {row.slice(2, 4).map((seat, i) =>
                seat ? (
                  <button
                    key={seat.seatNumber}
                    disabled={seat.isBooked}
                    onClick={() => handleSelectSeat(seat.seatNumber)}
                    style={{
                      width: 40, height: 40,
                      background: seat.isBooked
                        ? '#ccc'
                        : (selectedSeats.includes(seat.seatNumber) ? '#4caf50' : '#fff'),
                      border: '1.5px solid #888',
                      borderRadius: 8,
                      cursor: seat.isBooked ? 'not-allowed' : 'pointer',
                      fontWeight: 600,
                      marginRight: i === 0 ? 8 : 0
                    }}
                  >
                    {seat.seatNumber}
                  </button>
                ) : <div key={i + 2} style={{ width: 40, height: 40 }} />
              )}
            </div>
          ))}
        </div>
        <button
          onClick={handleBookSeat}
          disabled={!selectedSeats.length}
          style={{
            padding: '0.75rem 2rem',
            background: '#d32f2f',
            color: '#fff',
            border: 'none',
            borderRadius: 24,
            fontSize: '1.1rem',
            cursor: selectedSeats.length ? 'pointer' : 'not-allowed'
          }}
        >
          Book Seat{selectedSeats.length > 1 ? 's' : ''}
        </button>
      </div>
    </div>
  );
};

export default SeatSelectionModal;
