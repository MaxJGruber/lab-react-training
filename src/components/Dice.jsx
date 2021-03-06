import React from 'react';

const picArr = [
  './img/dice1.png',
  './img/dice2.png',
  './img/dice3.png',
  './img/dice4.png',
  './img/dice5.png',
  './img/dice6.png',
];

class Dice extends React.Component {
  state = {
    picture: picArr[Math.floor(Math.random() * picArr.length) + 1],
    clicked: false,
  };

  pictureClicked = () => {
    this.setState({
      picture: './img/dice-empty.png',
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <div className="Dice">
        {this.state.clicked && (
          <img src={this.state.picture} onClick={this.pictureClicked} alt="" />
        )}
        {!this.state.clicked && (
          <img
            src={picArr[Math.floor(Math.random() * picArr.length) + 1]}
            onClick={this.pictureClicked}
            alt=""
          />
        )}
      </div>
    );
  }
}

export default Dice;
