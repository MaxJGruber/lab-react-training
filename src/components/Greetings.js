import React from 'react';

function Greetings(props) {
    switch (props.lang) {
      case 'de':
        return <div className="IdCard">Hallo {props.children}</div>;
      case 'fr':
        return <div className="IdCard">Bonjour {props.children}</div>;
      case 'es':
        return <div className="IdCard">Hola {props.children}</div>;
      case 'en':
        return <div className="IdCard">Hello {props.children}</div>;
    }
  }

  export default Greetings;