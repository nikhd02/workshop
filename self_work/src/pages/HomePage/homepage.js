// import Navbar from "../common/Navbar/navbar"

// const HomePage = () => {
//     return (
//         <div>
//             <Navbar/>
//             Home
//         </div>
        
//     )
// }
// export default HomePage;

import React from "react";
import Navbar from "../common/Navbar/navbar";



const HomePage = () => {
    return (
        <div className="homePage">
            <Navbar />
            <div className="mainContent">
                <h1>Welcome to the Home Page</h1>
                <p>This is the area of the home page. Here you can see information about the website.</p>
                <button className="primaryButton">Learn More</button>
            </div>
        </div>
    );
}

export default HomePage;
