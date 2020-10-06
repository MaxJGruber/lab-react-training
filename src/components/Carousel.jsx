import React from 'react';

class Carousel extends React.Component {
  state = {
    carousel: 1,
    // prevButton: false,
    // nextButton: false,
  };
  goNext = () => {
    this.setState({
      carousel:
        this.state.carousel >= this.props.imgs.length - 1
          ? 0
          : this.state.carousel + 1,
    });
  };
  goBack = () => {
    this.setState({
      carousel:
        this.state.carousel === 0
          ? this.props.imgs.length - 1
          : this.state.carousel - 1,
    });
  };

  render() {
    return (
      <div className="Carousel">
        <button id="back" onClick={this.goBack}>
          BACK
        </button>
        <img src={this.props.imgs[this.state.carousel]} alt="" />
        <button id="next" onClick={this.goNext}>
          NEXT
        </button>
      </div>
    );
  }
}

export default Carousel;
