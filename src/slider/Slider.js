import React from 'react';
import styles from './slider.module.css';
// import Slide from './Slide';
class Slider extends React.Component {
  state = { index: 2 };
  images = {
    src: [
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
      'https://dailyweb.pl/wp-content/uploads/2019/02/500px-1200x1200.jpg',
      'https://cdn-dcp.avt.pl/i/images/2/6/9/_src_18269-500px.jpg',
      'https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg',
      'https://i.wpimg.pl/730x0/m.fotoblogia.pl/karcz-6cb7d7a110be2853fe8504b0cb.jpg'
    ]
  };
  prevSlide = () => {
    this.setState({ index: this.state.index - 1 });
  };
  nextSlide = () => {
    this.setState({ index: this.state.index + 1 });
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
                  ? {
                      position: 'absolute',
                      left: `${600}px`,
                      transform: 'scale(1.5)',
                      'z-index': '1000'
                    }
                  : { transform: 'scale(0.9)' }
              }
            />
          ))}
        </div>
        <button
          onClick={() => {
            this.prevSlide();
          }}
        >
          prev slide
        </button>
        <button
          onClick={() => {
            this.nextSlide();
          }}
        >
          next slide
        </button>
      </div>
    );
  }
}
export default Slider;
