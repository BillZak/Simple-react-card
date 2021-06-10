import React from 'react';

const Heading = (props) => {
    return (
        <div className="head">
            <h2>
                {props.head}
            </h2>
        </div>
    );
}

export default Heading;
