import React from 'react';
import styles from './slider.module.css';
// import Slide from './Slide';
class Slider extends React.Component {
  state = { index: 1 };
  images = {
    src: [
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg'
    ]
  };
  render() {
    return (
      <div>
        <div className={styles.sliderContainer}>
          {this.images.src.map((el, index) => (
            <img
              className={styles.slide}
              src={el}
              style={
                this.state.index == index
                  ? { transform: 'scale(1.1)' }
                  : { transform: 'scale(0.9' }
              }
            />
          ))}
        </div>
        <button>prev slide</button>
        <button>next slide</button>
      </div>
    );
  }
}
export default Slider;
