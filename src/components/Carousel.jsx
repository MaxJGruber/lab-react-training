import React from 'react';

class Carousel extends React.Component {
  state = {
    imgs: props.imgs,
  };
  goNext = () => {};
  goBack = () => {};

  render() {
    return (
      <div className="Carousel">
        <img src={this.imgs} alt="" />
        <button id="back">BACK</button>
        <button id="next">NEXT</button>
      </div>
    );
  }
}

export default Carousel;
