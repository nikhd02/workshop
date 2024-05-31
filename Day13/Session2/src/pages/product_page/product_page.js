// // HomePage.js
// import React from 'react';
// import Navbar from '../home_pages/navbar';
// const ProductPage = () => {
//     return (
//         <div className="product-page">
//             <Navbar />
     
//         </div>
//     );
// };

// export default ProductPage;

// ProductPage.js
// import React from 'react';
// import Navbar from '../home_pages/navbaravbar';
// import ProductImage from './ProductImage';
// import ProductDetails from './ProductDetails';
// import ProductDescription from './ProductDescription';
// import ProductReviews from './ProductReviews';
// import RelatedProducts from './RelatedProducts';
// import Footer from '../home_pages/Footer';
// import './ProductPage.css'; // Assuming you have a CSS file for styling

// ProductPage.js

// ProductPage.js


// ProductPage.js
import React from 'react';
import Navbar from '../home_pages/navbar';
import './ProductPage.css'; // Assuming you have a CSS file for styling

const ProductPage = () => {
    const product = {
        imageUrl: "https://th.bing.com/th/id/OIP.z1Z_Ay2hV1XXxXbpsSCpNwAAAA?rs=1&pid=ImgDetMain",
        name: "Mango Juice",
        price: "$10.00",
        rating: 4.5,
        reviewsCount: 100,
        description: "Product description goes here.",
        reviews: [
            { id: 1, user: "User1", rating: 4, comment: "Great product!" },
            { id: 2, user: "User2", rating: 5, comment: "Amazing quality!" },
            // Other review objects
        ],
        relatedProducts: [
            { id: 1, name: "RasBhari Mango", imageUrl: "https://media.istockphoto.com/vectors/realistic-ripe-mango-with-mango-slice-3d-illustration-vector-id922826828?k=6&m=922826828&s=170667a&w=0&h=G2gsjI16_HyJI7U_3w8w0k-DiiDvkYeHkl0W-lLUJZ8=", price: "$50.00" },
            { id: 2, name: "Related Product 2", imageUrl: "url_of_related_product_image", price: "$60.00" },
            // Other related product objects
        ]
    };

    return (
        <div className="product-page">
            <Navbar />
            <div className="breadcrumb">Home &gt; Kitchen &gt; Fruits &gt; Mango</div>
            <div className="product-content">
                <div className="product-main">
                    <div className="left-column">
                        <img className="product-image" src={product.imageUrl} alt={product.name} />
                    </div>
                    <div className="right-column">
                        <h1 className="product-name">{product.name}</h1>
                        <div className="product-price">{product.price}</div>
                        <div className="product-rating">Rating: {product.rating} ({product.reviewsCount} reviews)</div>
                        <div className="product-description">{product.description}</div>
                        <button className="add-to-cart-button">Add to Cart</button>
                        <button className="buy-now-button">Buy Now</button>
                    </div>
                </div>
                <div className="product-reviews">
                    <h2>Reviews</h2>
                    <ul>
                        {product.reviews.map(review => (
                            <li key={review.id}>
                                <p><strong>{review.user}</strong> - {review.rating}</p>
                                <p>{review.comment}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="product-related">
                    <h2>Related Products</h2>
                    <div className="related-products">
                        {product.relatedProducts.map(relatedProduct => (
                            <div key={relatedProduct.id} className="related-product">
                                <img src={relatedProduct.imageUrl} alt={relatedProduct.name} />
                                <p>{relatedProduct.name}</p>
                                <p>Price: {relatedProduct.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
