// import React, { useState } from "react";
// import Navbar from "../common/Navbar/navbar";
// import {useState} from "react";

// const ImageGenerator = () => {
//     const [name, changeName] = useState("Aakash");

//     const fun = (e) => {
//         changeName(e.target.value);
//     }


//     return (
//         <div className="imageGenerator">
//             <Navbar />
//             <div className="mainContent">
//                 <h1>Welcome to the Image Generator</h1>
//                 <input 
//                     type="text" 
//                     placeholder="Enter image URL" 
                     
//                     onChange={(e)=>{fun(e)}} 
//                     className="imageInput"
//                 />
//                 <button className="primaryButton">Generate Image</button><br/>
//                 {name}
//                 <div className="imageContainer">
//                     <img src={"https://source.unsplash.com/random/400x400"} alt="Generated" className="generatedImage" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ImageGenerator;



import React, { useState, useEffect } from "react";
import Navbar from "../common/Navbar/navbar";


const HistoryPage = () => {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const fetchImage = () => {
        setImageUrl(`https://source.unsplash.com/random/400x400/?${title}`);
    };

    return (
        <div>
            <Navbar />
            <div className="mainContent">
            <h1>Welcome to the Image Generator</h1>
                <input 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter title" 
                />
                <button className="primaryButton" onClick={fetchImage}>Generate Image</button>

                {imageUrl && (
                    <div className="imageContainer">
                        <img src={imageUrl} alt={title} className="generatedImage" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HistoryPage;
