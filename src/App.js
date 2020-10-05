import React from 'react';
// import logo from './logo.svg';
import './App.css';

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} />
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

function Random(props) {
  return (
    <div className="IdCard">
      <p>
        Random value between {props.min} and {props.max} =>
        {Math.floor(Math.random() * (props.max - props.min) + props.min)}
      </p>
    </div>
  );
}

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

function Rating(props) {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
}

function App(props) {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;
