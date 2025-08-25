import React from 'react';

const cities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'Houston' },
    { id: 5, name: 'Phoenix' },
];

const CitySelector: React.FC<{ onCitySelect: (city: string) => void }> = ({ onCitySelect }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onCitySelect(event.target.value);
    };

    return (
        <div>
            <label htmlFor="city-select">Select a city:</label>
            <select id="city-select" onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                {cities.map(city => (
                    <option key={city.id} value={city.name}>
                        {city.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CitySelector;