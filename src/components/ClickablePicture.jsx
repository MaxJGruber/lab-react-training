import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    clicked: false,
  };

  nextPicture = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="Picture">
        {!this.state.clicked && (
          <img src={this.props.img} onClick={this.nextPicture} alt="" />
        )}
        {this.state.clicked && (
          <img src={this.props.imgClicked} onClick={this.nextPicture} alt="" />
        )}
      </div>
    );
  }
}

export default ClickablePicture;
