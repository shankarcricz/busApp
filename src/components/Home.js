import React from "react";
import Busicon from "./Busicon";
import Searchbox from "./Searchbox";
import '../Home.css'
import Navbar from "./Navbar";


const Home = () => {
    return (
        <>
        <Navbar />
        <div className="header">
            <h2 className="text-center">You can book the ticket here!</h2>
            <Searchbox />
        </div> 
        </> 
    );
}

export default Home