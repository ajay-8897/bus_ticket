import React, { useState } from 'react';
import CardConfirmation from '../components/Payment/CardConfirmation';
import { useHistory } from 'react-router-dom';

const PaymentPage: React.FC = () => {
  // Try both possible keys for selected seats and bus
  let selectedSeats: number[] = [];
  let selectedBus: any = {};

  try {
    selectedSeats = JSON.parse(localStorage.getItem('selectedSeats') || '[]');
  } catch {
    selectedSeats = [];
  }
  try {
    selectedBus = JSON.parse(localStorage.getItem('selectedBus') || '{}');
  } catch {
    selectedBus = {};
  }

  const [showCardForm, setShowCardForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const history = useHistory();

  if (!selectedSeats.length || !selectedBus || !selectedBus.id) {
    return <div style={{ textAlign: 'center', marginTop: 40 }}>No seat or bus selected.</div>;
  }

  const handlePayNow = () => {
    setShowCardForm(true);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowConfirmation(true);
      setSubmitted(false);
    }, 800);
  };

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
      <h2 style={{ marginBottom: 24 }}>Payment Details</h2>
      <div style={{ marginBottom: 16 }}>
        <strong>Bus:</strong> {selectedBus.bus_number || selectedBus.bus_name || selectedBus.name}
      </div>
      <div style={{ marginBottom: 16 }}>
        <strong>Seats:</strong> {selectedSeats.join(', ')}
      </div>
      <div style={{ marginBottom: 16 }}>
        <strong>Date:</strong> {selectedBus.departure_datetime}
      </div>
      {!showCardForm ? (
        <button style={{
          marginTop: 24,
          padding: '0.8rem 2.5rem',
          background: '#d32f2f',
          color: '#fff',
          border: 'none',
          borderRadius: 24,
          fontSize: '1.1rem',
          cursor: 'pointer'
        }} onClick={handlePayNow}>
          Pay Now
        </button>
      ) : (
        <form onSubmit={handleCardSubmit} style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={e => setCardName(e.target.value)}
            required
            style={{ padding: '0.7rem', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem' }}
          />
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            required
            maxLength={16}
            pattern="\d{16}"
            style={{ padding: '0.7rem', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem' }}
          />
          <div style={{ display: 'flex', gap: 12 }}>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
              required
              maxLength={5}
              pattern="\d{2}/\d{2}"
              style={{ flex: 1, padding: '0.7rem', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem' }}
            />
            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={e => setCvv(e.target.value)}
              required
              maxLength={4}
              pattern="\d{3,4}"
              style={{ flex: 1, padding: '0.7rem', borderRadius: 8, border: '1px solid #ccc', fontSize: '1rem' }}
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: 8,
              padding: '0.8rem 2.5rem',
              background: '#388e3c',
              color: '#fff',
              border: 'none',
              borderRadius: 24,
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
            disabled={submitted}
          >
            {submitted ? 'Processing...' : 'Pay'}
          </button>
        </form>
      )}
      {showConfirmation && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
        }}>
          <div style={{
            background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, maxWidth: 370, width: '92vw', boxShadow: '0 4px 24px rgba(0,0,0,0.16)'
          }}>
            <CardConfirmation cardData={{
              number: cardNumber,
              name: cardName,
              expiry: expiry,
              cvc: cvv,
              focused: ''
            }} />
            <button
              style={{
                marginTop: 24,
                padding: '0.7rem 2rem',
                background: '#388e3c',
                color: '#fff',
                border: 'none',
                borderRadius: 24,
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
              onClick={() => history.push('/ticket')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
