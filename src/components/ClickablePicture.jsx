import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    img: this.props.img,
  };

  nextPicture = () => {
    this.setState({
      img: this.props.imgClicked,
    });
  };

  render() {
    return (
      <div className="Picture">
        <img src={this.state.img} onClick={this.nextPicture} alt="" />
      </div>
    );
  }
}

export default ClickablePicture;
