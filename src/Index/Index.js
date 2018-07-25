import React from 'react';

const index = (props) => {
    return (
        <div className="container">
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm"> {props.children}</span>
            </div>
            <input
                type="text"
                onChange={props.changed}
                value={props.value} />

        </div>
        </div>
    )
}

export default index;