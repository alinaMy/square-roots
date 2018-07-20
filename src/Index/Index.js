import React from 'react';

const index = (props) => {
    return (
        <div>
            <span> {props.children}</span>
            <input type="text" onChange = {props.changed}/>
        </div>

    )
}

export default index;