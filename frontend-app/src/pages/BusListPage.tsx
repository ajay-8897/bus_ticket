import React, { useState, useEffect } from 'react';
import BusList from '../components/Buses/BusList';

// Accept params as argument, don't use window inside
function getInitialSearchParams(params: URLSearchParams) {
    // Try to get from localStorage first
    const stored = localStorage.getItem('searchParams');
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            return {
                start_location: parsed.from || 'Delhi',
                destination: parsed.to || 'Jaipur',
                departure_datetime: parsed.date ? `${parsed.date} 08:00:00` : '2025-08-26 08:00:00'
            };
        } catch {
            // fallback to below
        }
    }
    const from = params.get('from');
    const to = params.get('to');
    const date = params.get('date');
    return {
        start_location: from || 'Delhi',
        destination: to || 'Jaipur',
        departure_datetime: date ? `${date} 08:00:00` : '2025-08-26 08:00:00'
    };
}

const BusListPage: React.FC = () => {
    // Create params from window.location.search ONCE here
    const urlParams = new URLSearchParams(window.location.search);
    // searchParams is the single source of truth for the search/filter state
    const [searchParams, setSearchParams] = useState(getInitialSearchParams(urlParams));
    const [form, setForm] = useState(searchParams);

    // Update form fields when searchParams changes (e.g. after submit)
    useEffect(() => {
        setForm(searchParams);
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams(form);
    };

    // Helper to extract date part from departure_datetime
    const getDatePart = (datetime: string) => {
        // Handles both "YYYY-MM-DD" and "YYYY-MM-DD HH:mm:ss"
        return datetime.split(' ')[0];
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
                            value={getDatePart(form.departure_datetime)}
                            onChange={e => {
                                // Preserve time if present, else default to 08:00:00
                                const time = form.departure_datetime.split(' ')[1] || '08:00:00';
                                setForm({ ...form, departure_datetime: e.target.value + ' ' + time });
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