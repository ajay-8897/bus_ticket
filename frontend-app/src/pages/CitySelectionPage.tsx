import React from 'react';
import CitySelector from '../components/Cities/CitySelector';

const CitySelectionPage: React.FC = () => {
    return (
        <div>
            <h1>Select Your City</h1>
            <CitySelector onCitySelect={(city: string) => { /* handle city selection */ }} />
        </div>
    );
};

export default CitySelectionPage;