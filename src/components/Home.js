import React from "react";
import Searchbox from "./Searchbox";
import '../Home.css'
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import ControlledCarousel from "./Carousel";
import Card from "./Card";


const Home = () => {
    return (
        <>
            <div className="header">
                <h2 className="text-center text-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="46" fill="currentColor" class="bi bi-bus-front-fill" viewBox="0 0 16 16">
                        <path d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.496 2.496 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A43.608 43.608 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1v2ZM3.552 3.22A43.306 43.306 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44.304 44.304 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994ZM8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.304 44.304 0 0 0 8 4Zm-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1Z" />
                    </svg>
                    You can book the ticket here!</h2>
                <Searchbox />
            </div>
            <div className="d-flex justify-content-around mt-5">
                <Card image="https://st.redbus.in/Images/rdc/36million.svg" title="4M" description="customers worldwide"/>
                <Card image="https://st.redbus.in/Images/rdc/3500worldwide.svg" title="over 1000" description="bus companies worldwide"/>
                <Card image="https://st.redbus.in/Images/rdc/36million.svg" title="50k+" description="tickets booked daily"/>
            </div>
        </>
    );
}

export default Home