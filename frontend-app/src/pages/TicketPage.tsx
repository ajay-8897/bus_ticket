import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

interface Ticket {
  bus_number: string;
  start_location: string;
  destination: string;
  departure_datetime: string;
  seatNumbers: number[];
  price: number;
  transactionId: string;
}

interface User {
  userName: string;
  userEmail: string;
  contact: string;
}

const fetchUserInfo = async (): Promise<User> => {
  // Replace with real API call if available
  // Example: const res = await fetch('/api/user/me');
  // return await res.json();
  return {
    userName: 'John Doe',
    userEmail: 'john@example.com',
    contact: '9876543210'
  };
};

const getTickets = (): Ticket[] => {
  // Replace with real ticket fetching logic if needed
  const selectedBus = JSON.parse(localStorage.getItem('selectedBus') || '{}');
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats') || '[]');
  if (!selectedBus.id || !selectedSeats.length) return [];
  return [
    {
      bus_number: selectedBus.bus_number || selectedBus.bus_name || selectedBus.name,
      start_location: selectedBus.start_location,
      destination: selectedBus.destination,
      departure_datetime: selectedBus.departure_datetime,
      seatNumbers: selectedSeats,
      price: 1299 * selectedSeats.length, // Example price logic
      transactionId: 'TXN' + Math.floor(Math.random() * 1000000)
    }
  ];
};

const downloadTicketPDF = (ticket: Ticket, user: User) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Bus Ticket', 15, 18);
  doc.setFontSize(12);
  doc.text(`Passenger Name: ${user.userName}`, 15, 32);
  doc.text(`Email: ${user.userEmail}`, 15, 40);
  doc.text(`Contact: ${user.contact}`, 15, 48);
  doc.text(`Bus: ${ticket.bus_number}`, 15, 60);
  doc.text(`From: ${ticket.start_location}`, 15, 68);
  doc.text(`To: ${ticket.destination}`, 15, 76);
  doc.text(`Departure: ${ticket.departure_datetime}`, 15, 84);
  doc.text(`Seats: ${ticket.seatNumbers.join(', ')}`, 15, 92);
  doc.text(`Transaction ID: ${ticket.transactionId}`, 15, 100);
  doc.text(`Amount Paid: ₹${ticket.price}`, 15, 108);
  doc.save(`ticket_${ticket.transactionId}.pdf`);
};

const TicketPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetchUserInfo().then(setUser);
    setTickets(getTickets());
  }, []);

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}>
      <h1>Your Tickets</h1>
      {!tickets.length && <div>No tickets found.</div>}
      {tickets.map((ticket, idx) => (
        <div key={ticket.transactionId} style={{ border: '1px solid #eee', borderRadius: 8, padding: 20, marginBottom: 24 }}>
          <div><strong>Bus:</strong> {ticket.bus_number}</div>
          <div><strong>From:</strong> {ticket.start_location}</div>
          <div><strong>To:</strong> {ticket.destination}</div>
          <div><strong>Departure:</strong> {ticket.departure_datetime}</div>
          <div><strong>Seats:</strong> {ticket.seatNumbers.join(', ')}</div>
          <div><strong>Transaction ID:</strong> {ticket.transactionId}</div>
          <div><strong>Amount Paid:</strong> ₹{ticket.price}</div>
          {user && (
            <button
              style={{
                marginTop: 16,
                padding: '0.7rem 2rem',
                background: '#1976d2',
                color: '#fff',
                border: 'none',
                borderRadius: 24,
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}
              onClick={() => downloadTicketPDF(ticket, user)}
            >
              Download Ticket (PDF)
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TicketPage;