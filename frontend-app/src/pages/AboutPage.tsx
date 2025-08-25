import React from 'react';

const reviews = [
  {
    name: "Priya S.",
    text: "Booking my bus tickets here was super easy and quick. Highly recommended!"
  },
  {
    name: "Rahul K.",
    text: "Great customer service and smooth experience. Will use again!"
  },
  {
    name: "Sneha M.",
    text: "The interface is user-friendly and the booking process is hassle-free."
  }
];

const AboutPage: React.FC = () => (
  <div className="container">
    <h2>About</h2>
    <p>
      <strong>Disclaimer:</strong> This is a demo bus booking system created for educational purposes. All bookings and data are simulated.
    </p>
    <h3>Customer Reviews</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {reviews.map((review, idx) => (
        <li key={idx} style={{ marginBottom: '18px', background: '#f1f1f1', padding: '16px', borderRadius: '6px' }}>
          <strong>{review.name}</strong>
          <p style={{ margin: '8px 0 0 0' }}>{review.text}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default AboutPage;
