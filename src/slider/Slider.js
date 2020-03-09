import React from 'react';
import styles from './slider.module.css';
// import Slide from './Slide';
class Slider extends React.Component {
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
          {this.images.src.map(el => (
            <img clssName={styles.slide} src={el} />
          ))}
        </div>
        <button>prev slide</button>
        <button>next slide</button>
      </div>
    );
  }
}
export default Slider;
