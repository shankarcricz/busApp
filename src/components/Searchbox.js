import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import React from "react";

const Searchbox = () => {
    return (
        <div className="box">
            <div className="row">
                <TextField className="col-3" id="From" label="From" variant="outlined" />
                <TextField className="col-3" id="To" label="To" variant="outlined" />
                <TextField className="col-3" type="date" id="Date"  variant="outlined" />
                <Button className="col-3" variant="outlined">Search</Button>
            </div>
        </div>
    );
}

export default Searchbox