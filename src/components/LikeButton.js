import React from 'react';

const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

class LikeButton extends React.Component {
  state = {
    likes: 0,
  };

  increment = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div className="Button">
        <button
          onClick={this.increment}
          style={{
            backgroundColor:
              colorArr[
                Math.floor(
                  Math.random() * (colorArr.length)
                ) + 1
              ],
          }}
        >
          {this.state.likes} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
