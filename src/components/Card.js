import React from "react";

const Card = (props) => {
    return (
        <div className="card text-center" style={{"width": "18rem"}}>
            <div className="card-body">
                <img width={props.title === "over 1000"?"270px": null}
                    height={props.title === "over 1000"?"170px":null}
                src={props.image} />
                <h3>{props.title}</h3>
                <small className="text-muted"><em>{props.description}</em></small>
            </div>
        </div>
    );
}

export default Card