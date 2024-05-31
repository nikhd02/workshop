// const Navbar = () => {
//     return (
//         <div className="navbar-container">
//             <div className="navbar-item">Home</div>
//             <div className="navbar-item">Product</div>
//             <div className="navbar-item">Search</div>
//             <div className="navbar-item">Contact</div>
//         </div>
//     );
// };

// export default Navbar;


import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <img src="https://flyclipart.com/thumb2/amazon-logo-png-white-for-free-download-on-ya-webdesign-499830.png" alt="Logo" className="navbar-logo" />
            </div>
            <div className="navbar-middle">
                <input type="text" className="navbar-search" placeholder="Search..." />
                <button className="navbar-search-button">Search</button>
            </div>
            <div className="navbar-right">
                <div className="navbar-item">Home</div>
                <div className="navbar-item">Product</div>
                <div className="navbar-item">Search</div>
                <div className="navbar-item">Contact</div>
            </div>
        </div>
    );
};

export default Navbar;
