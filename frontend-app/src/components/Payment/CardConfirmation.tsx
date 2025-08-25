import React from 'react';
import CreditCard from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const CardConfirmation: React.FC<{ cardData: any }> = ({ cardData }) => {
    return (
        <div>
            <h2>Card Confirmation</h2>
            <CreditCard
                number={cardData.number}
                name={cardData.name}
                expiry={cardData.expiry}
                cvc={cardData.cvc}
                focused={cardData.focused}
            />
            <p>Thank you for your payment!</p>
        </div>
    );
};

export default CardConfirmation;