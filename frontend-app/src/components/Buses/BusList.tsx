import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BusList: React.FC = () => {
    const [buses, setBuses] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const response = await axios.get('/api/buses');
                setBuses(response.data);
            } catch (err) {
                setError('Failed to fetch bus data');
            } finally {
                setLoading(false);
            }
        };

        fetchBuses();
    }, []);

    if (loading) {
        return <div>Loading buses...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Available Buses</h2>
            <ul>
                {buses.map((bus) => (
                    <li key={bus.id}>
                        <h3>{bus.company}</h3>
                        <p>Route: {bus.route}</p>
                        <p>Departure: {bus.departureTime}</p>
                        <p>Arrival: {bus.arrivalTime}</p>
                        <p>Price: ${bus.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BusList;