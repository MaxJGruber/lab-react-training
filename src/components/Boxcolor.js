import React from 'react';

function BoxColor(props) {
  return (
    <div
      className="IdCard"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      <p>
        RGB ({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}

export default BoxColor;
