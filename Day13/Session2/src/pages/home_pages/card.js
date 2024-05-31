// Card.js
import React from 'react';

const Card = () => {
    const products = [
        { name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
        { name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
        { name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
        // Add more products as needed
    ];

    return (
        <div className="card-container">
            {products.map((product, index) => (
                <div key={index} className="card">
                    <img src={product.image} alt={product.name} className="card-image" />
                    <div className="card-info">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
