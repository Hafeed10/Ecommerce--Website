// CardContext.js
import React, { createContext, useState } from 'react';

export const CardContext = createContext();

const CardProvider = ({ children }) => {
    const [cardItems, setCardItems] = useState([]);

    const addToCard = (product) => {
        setCardItems([...cardItems, product]);
    };

    return (
        <CardContext.Provider value={{ cardItems, addToCard }}>
            {children}
        </CardContext.Provider>
    );
};

export default CardProvider;
