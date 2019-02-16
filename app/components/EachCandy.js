import React from 'react';
import { Link } from 'react-router-dom'

export default function EachCandy(props) {
    const candy = props.candy
    return (
      <div>
        <Link to={`/candies/${candy.id}`}><h3>{candy.name}</h3></Link>
        <p>{candy.description}</p>
        <img src={candy.imageUrl} alt="image" />
      </div>
      )
    
}