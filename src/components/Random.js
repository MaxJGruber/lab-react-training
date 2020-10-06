import React from 'react';

function Random(props) {
  return (
    <div className="IdCard">
      <p>
        Random value between {props.min} and {props.max} {'=> '}
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </p>
    </div>
  );
}

export default Random;
