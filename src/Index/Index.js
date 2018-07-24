import React from 'react';

const index = (props) => {
    return (
        <div class="container">
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm"> {props.children}</span>
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