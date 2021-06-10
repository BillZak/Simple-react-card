import Heading from './Heading';
import Description from './Description';
import Image from './Image';
import reactimg from './reactimg.png';
import './Simple-card.css';

import React, { Component } from 'react';

class SimpleCard extends Component {
    render() {
        return (
        <div className="card">
           <header className="body">
              <Heading  head="Simple React Card"/> 
              <Description description="React is an efficient and flexible JavaScript library used for building front-end applications and User Interfaces."/>
           </header> 
           <Image imgUrl={reactimg} />
        </div>
        );
    }
}

export default SimpleCard;

