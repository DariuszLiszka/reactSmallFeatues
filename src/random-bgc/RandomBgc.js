import React from 'react';

class RandomBgc extends React.Component {
  state = {
    r: 0,
    g: 0,
    b: 0
  };

  changeBgc = async () => {
    await this.setColors();

    document.body.style.background = `rgb(${this.state.r},${this.state.g},${this.state.b})`;
  };
  randomizeValue = () => {
    let random = 0;
    random = Math.floor(Math.random() * 256);
    return random;
  };
  setColors = () => {
    this.setState({
      r: this.randomizeValue(),
      g: this.randomizeValue(),
      b: this.randomizeValue()
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.changeBgc();
          }}
        >
          changeBGC
        </button>
      </div>
    );
  }
}

export default RandomBgc;
