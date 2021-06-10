import React from 'react';

const Image = (props) => {
    return (
        <div className="image">
            <img className="image" src={props.imgUrl} alt="React"/>
        </div>
    );
}

export default Image;
