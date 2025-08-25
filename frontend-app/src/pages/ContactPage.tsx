import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the email
  };

  return (
    <div
      style={{
        width: '100vw',
        padding: '2rem',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, color: '#222', textShadow: 'none' }}>
        <h2>Contact</h2>
        <p>
          For inquiries, please email us at <a href="mailto:Support@himbusses.com" >support@himbusses.com</a>.
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street Palampur, Himachal Pradesh, India
          <br />
          <strong>Contact Numbers:</strong>
          <br />
          +1 234 567 8900
          <br />
          +1 987 654 3210
          <br />
          +1 555 123 4567
        </p>
        <h3 style={{ textAlign: 'center'}}>Ask your's Query</h3>
        {submitted ? (
          <p style={{ textAlign: 'center', margin: '2rem auto', fontWeight: 'bold', color: '#222' }}>
            Thank you for your message!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: '600px',
              minWidth: '320px',
              width: '60vw',
              margin: '2rem auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{ width: '100%' }}>
              <label style={{ color: '#222', fontWeight: 'bold' }}>Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={{ width: '100%', marginBottom: '1rem', background: '#fff', color: '#222', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <label style={{ color: '#222', fontWeight: 'bold' }}>Email:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{ width: '100%', marginBottom: '1rem', background: '#fff', color: '#222', border: '1px solid #ccc' }}
              />
            </div>
            <div style={{ width: '100%' }}>
              <label style={{ color: '#222', fontWeight: 'bold' }}>Message:</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                style={{ width: '100%', marginBottom: '1rem', background: '#fff', color: '#222', border: '1px solid #ccc' }}
              />
            </div>
            <button type="submit" style={{ width: '100%', background: '#ffd700', color: '#222', fontWeight: 'bold' }}>Send</button>
          </form>
        )}
      </div>
      {/* Remove overlay */}
      {/* <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.4)',
        zIndex: 0
      }} /> */}
    </div>
  );
};



export default ContactPage;
