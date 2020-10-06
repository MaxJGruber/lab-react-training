import React from 'react';

function CreditCard(props) {
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <p>{props.type}</p>
      <p>{props.number.substring(12)}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
