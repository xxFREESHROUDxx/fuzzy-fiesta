import React from 'react';

function Card(props) {
  return (
    <div>
      <h1>Card Component</h1>
      <h4>{props.data.name}</h4>
      <h5>{props.data.age}</h5>
    </div>
  );
}

export default Card;
