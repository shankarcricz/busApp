import { Button } from "bootstrap";
import React from "react";

const Navbar = () => {
    return (
        <div className="d-flex p-2 text-light bg-dark">
            <div className="p-2">
                <h4 className="text-muted">Brand</h4>
            </div>
            <div className="p-2">
                <h4>Home</h4>
            </div>
            <div className="p-2">
                <h4>link</h4>
            </div>
            <div className="login">
                <button type="button" class="btn btn-outline-light mt-2">Login</button>
            </div>
        </div>
    );
}

export default Navbar