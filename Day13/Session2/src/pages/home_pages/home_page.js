// HomePage.js
import React from 'react';
import Navbar from './navbar';
import CategoryRow from './catgegoryRow';
import Carousal from './carousal';
import Card from './card';

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <CategoryRow />
            <Carousal />
            <div className="product-section">
                <h2>Featured Products</h2>
                <Card />
            </div>
        </div>
    );
};

export default HomePage;
