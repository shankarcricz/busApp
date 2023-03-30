import React from "react";

const Searchbox = () => {
    return (
        <div className="container">
            <form>
            <div className="row">
                <div className="col-3">
                    <input type="text" className="form-control" placeholder="From" />
                </div>
                <div className="col-3">
                    <input type="text" className="form-control" placeholder="To" />
                </div>
                <div className="col-3">
                    <input type="date" className="form-control" />
                </div>
                <div className="col-3">
                    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                        Search
                    </button>
                </div>
            </div>
        </form>
        </div>
    );
}

export default Searchbox