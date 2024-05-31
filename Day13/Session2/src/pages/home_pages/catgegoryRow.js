// CategoryRow.js
import React from 'react';

const CategoryRow = () => {
    const categories = ['Electronics', 'Books', 'Fashion', 'Home', 'Beauty', 'Toys', 'Sports'];

    return (
        <div className="category-row">
            {categories.map((category, index) => (
                <div key={index} className="category-item">{category}</div>
            ))}
        </div>
    );
};

export default CategoryRow;
