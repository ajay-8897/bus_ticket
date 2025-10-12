import React, { useEffect, useState } from 'react';
import SeatSelectionModal from './SeatSelectionModal';

interface Bus {
  id: number;
  bus_number: string;
  bus_type: string;
  departure_datetime: string;
  destination: string;
  start_location: string;
  number_of_seats: number;
  booked_seats: number;
  empty_seats: number;
}

interface BusListProps {
  searchParams: {
    start_location: string;
    destination: string;
    departure_datetime: string;
  };
}

const BusList: React.FC<BusListProps> = ({ searchParams }) => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  useEffect(() => {
    const fetchBuses = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('http://127.0.0.1:5000/buses/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(searchParams)
        });
        const data = await res.json();
        if (data.success) {
          setBuses(data.buses);
        } else {
          setError('No buses found.');
        }
      } catch (err) {
        setError('Failed to fetch buses.');
      }
      setLoading(false);
    };
    fetchBuses();
  }, [searchParams]);

  const handleViewSeats = (bus: Bus) => {
    setSelectedBus(bus);
    setShowModal(true);
  };

  if (loading) return <div>Loading buses...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!buses.length) return <div>No buses available.</div>;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      {buses.map(bus => (
        <div key={bus.id} style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          padding: '0.4rem 1rem', // reduce padding
          minWidth: '1100px',
          maxWidth: '1100px',
          margin: '0.3rem 0',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* Primo badge and offer */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.2rem', marginRight: '0.7rem' }}>
              <span style={{ color: '#f7b500', fontWeight: 700 }}>Primo</span>
            </span>
            {/* Example offer badge */}
            <span style={{
              background: '#fff3cd',
              color: '#a67c00',
              fontWeight: 600,
              borderRadius: '6px',
              padding: '0.2rem 0.7rem',
              fontSize: '0.95rem',
              marginLeft: 'auto'
            }}>
              Exclusive ₹100 OFF
            </span>
          </div>
          {/* Bus name, type, and icon */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.3rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.15rem', marginRight: '0.5rem' }}>
              {bus.bus_number} {/* Replace with bus name if available */}
            </span>
            {/* Bus icon */}
            <span style={{ fontSize: '1.2rem', marginRight: '0.3rem' }}>🚌</span>
          </div>
          <div style={{ color: '#555', fontSize: '1rem', marginBottom: '0.7rem' }}>
            {bus.bus_type} {/* Example: "A/C Sleeper (2+1)" */}
          </div>
          {/* Divider */}
          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0.7rem 0' }} />
          {/* Badges or info */}
          <div style={{ marginBottom: '0.7rem' }}>
            <span style={{
              background: '#fbeee6',
              color: '#a67c00',
              fontWeight: 500,
              borderRadius: '8px',
              padding: '0.3rem 0.9rem',
              fontSize: '0.95rem'
            }}>
              Exclusive discounts available for women passengers
            </span>
          </div>
          {/* Ratings, timings, seats, price */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.7rem'
          }}>
            {/* Rating */}
            <span style={{
              background: '#43a047',
              color: '#fff',
              borderRadius: '8px',
              padding: '0.3rem 0.8rem',
              fontWeight: 600,
              fontSize: '1.05rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ marginRight: '0.3rem' }}>★</span>4.8
              <span style={{
                background: '#e8f5e9',
                color: '#388e3c',
                borderRadius: '6px',
                marginLeft: '0.5rem',
                padding: '0.1rem 0.5rem',
                fontSize: '0.85rem',
                fontWeight: 500
              }}>992</span>
            </span>
            {/* Timings */}
            <span style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 1.2rem' }}>
              23:30 &mdash; 06:20
            </span>
            {/* Duration, seats */}
            <span style={{ color: '#555', fontSize: '0.98rem' }}>
              6h 50m &middot; {bus.empty_seats + bus.booked_seats} Seats ({bus.empty_seats} Single)
            </span>
          </div>
          {/* Price and View seats */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.7rem'
          }}>
            <div>
              <span style={{
                textDecoration: 'line-through',
                color: '#888',
                fontSize: '1rem',
                marginRight: '0.5rem'
              }}>
                ₹1,399
              </span>
              <span style={{
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#222'
              }}>
                ₹1,299
              </span>
              <span style={{ color: '#888', fontSize: '0.95rem', marginLeft: '0.3rem' }}>
                Onwards
              </span>
            </div>
            <button
              onClick={() => handleViewSeats(bus)}
              style={{
                background: '#d32f2f',
                color: '#fff',
                border: 'none',
                borderRadius: '24px',
                padding: '0.7rem 2.2rem',
                fontWeight: 600,
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
            >
              View seats
            </button>
          </div>
        </div>
      ))}
      {showModal && selectedBus && (
        <SeatSelectionModal
          bus={selectedBus}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default BusList;