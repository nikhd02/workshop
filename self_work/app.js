import React from "react";
import ReactDOM from "react-dom/client";
import "./src/pages/common/Navbar/navbar"
// import Navbar from "./src/pages/common/Navbar/navbar";
import HomePage from "./src/pages/HomePage/homepage";
import ImageGenerator from "./src/pages/ImageGenerator/ImageGenerator"
import History from "./src/pages/history/history/historypage";
import OldHistory from "./src/pages/history/history/oldhistorypage"
// import { Router } from "express";
''
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/image-generator",
        element: <ImageGenerator/>
    },
    {
        path: "/history",
        element: <History/>
    },
    {
        path: "/oldhistory",
        element: <OldHistory/>
    }
]);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);


const App = ()=>{
    return <RouterProvider router = {router} />
}


root.render(<App />);