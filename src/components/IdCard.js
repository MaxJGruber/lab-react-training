import React from 'react';

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt={props.firstName} />
      <div id="info-container">
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birthday: {props.birth.toString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
