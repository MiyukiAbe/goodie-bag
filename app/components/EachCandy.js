import React from 'react';

export default function EachCandy(props) {
    const candy = props.candy
   return (
      <div>
        <h3>{candy.name}</h3>
        <p>{candy.description}</p>
        <img src={candy.imageUrl} alt="image" />
      </div>
      )
    
}