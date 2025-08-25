import React, { useState } from 'react';
import BusList from '../components/Buses/BusList';

const BusListPage: React.FC = () => {
    const [searchParams, setSearchParams] = useState({
        start_location: 'Delhi',
        destination: 'Jaipur',
        departure_datetime: '2025-08-26 08:00:00'
    });

    const [form, setForm] = useState(searchParams);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams(form);
    };

    return (
        <>
            {/* Styled Search Bus Box (horizontal, like screenshot) */}
            <div style={{
                maxWidth: 1100,
                margin: '2rem auto',
                padding: '2.5rem 1.5rem 3.5rem 1.5rem',
                borderRadius: '24px',
                background: '#f9f6f2',
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ fontWeight: 600, fontSize: '1.25rem', display: 'block', marginBottom: '0.5rem' }}>
                            From
                        </label>
                        <input
                            type="text"
                            name="start_location"
                            value={form.start_location}
                            onChange={handleChange}
                            placeholder="From"
                            required
                            style={{
                                width: '100%',
                                padding: '0.9rem',
                                borderRadius: '8px',
                                border: '1px solid #dedede',
                                fontSize: '1.1rem'
                            }}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ fontWeight: 600, fontSize: '1.25rem', display: 'block', marginBottom: '0.5rem' }}>
                            To
                        </label>
                        <input
                            type="text"
                            name="destination"
                            value={form.destination}
                            onChange={handleChange}
                            placeholder="To"
                            required
                            style={{
                                width: '100%',
                                padding: '0.9rem',
                                borderRadius: '8px',
                                border: '1px solid #dedede',
                                fontSize: '1.1rem'
                            }}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ fontWeight: 600, fontSize: '1.25rem', display: 'block', marginBottom: '0.5rem' }}>
                            Date of Journey
                        </label>
                        <input
                            type="date"
                            name="departure_datetime"
                            value={form.departure_datetime.split('T')[0]}
                            onChange={e => {
                                // Keep time as 08:00:00 by default for demo
                                setForm({ ...form, departure_datetime: e.target.value + ' 08:00:00' });
                            }}
                            placeholder="dd-mm-yyyy"
                            required
                            style={{
                                width: '100%',
                                padding: '0.9rem',
                                borderRadius: '8px',
                                border: '1px solid #dedede',
                                fontSize: '1.1rem'
                            }}
                        />
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        style={{
                            padding: '1rem 3rem',
                            background: '#d32f2f',
                            color: '#fff',
                            fontWeight: 500,
                            border: 'none',
                            borderRadius: '32px',
                            cursor: 'pointer',
                            fontSize: '1.25rem',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
                        }}
                    >
                        Search buses
                    </button>
                </div>
            </div>
            <h1 style={{ textAlign: 'center', margin: '2rem 0', color: '#222' }}>Available Buses</h1>
            <BusList searchParams={searchParams} />
        </>
    );
};

export default BusListPage;