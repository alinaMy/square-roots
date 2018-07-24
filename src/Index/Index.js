import React from 'react';

const index = (props) => {
    return (
        <div>
            <span> {props.children}</span>
            <input 
            type="text" 
            onChange = {props.changed}
            value = {props.value}/>
        </div>

    )
}

export default index;