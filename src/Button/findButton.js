import React from 'react';
import 'bootstrap/dist/css/bootstrap.css/';

const findButton = (props) => {
    return (
        <div>
            <p>
                <button type="button" className="btn btn-primary" onClick={props.findRoots}>find the roots</button>
            </p>
        </div>

    )
}

export default findButton;