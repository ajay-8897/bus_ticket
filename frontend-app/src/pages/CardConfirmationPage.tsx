import React from 'react';
import CardConfirmation from '../components/Payment/CardConfirmation';

const CardConfirmationPage: React.FC = () => {
    const cardData = {
        // provide the necessary card data here
    };

    return (
        <div>
            <h1>Card Confirmation</h1>
            <CardConfirmation cardData={cardData} />
        </div>
    );
};

export default CardConfirmationPage;