import React from 'react';
import styles from './slider.module.css';
// import Slide from './Slide';
class Slider extends React.Component {
  state = {
    index: 2,
    images: [
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
      'https://dailyweb.pl/wp-content/uploads/2019/02/500px-1200x1200.jpg',
      'https://cdn-dcp.avt.pl/i/images/2/6/9/_src_18269-500px.jpg',
      'https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg',
      'https://i.wpimg.pl/730x0/m.fotoblogia.pl/karcz-6cb7d7a110be2853fe8504b0cb.jpg'
    ]
  };

  prevSlide = () => {
    const images = [...this.state.images];
    const popped = images.pop();
    images.unshift(popped);

    this.setState({ images });
  };
  nextSlide = () => {
    const images = [...this.state.images];
    const first = images.shift();
    images.push(first);

    this.setState({ images });
  };
  render() {
    {
      console.log(this.images);
    }
    return (
      <div>
        <div className={styles.sliderContainer}>
          {this.state.images.map((el, index) => (
            <img
              className={styles.slide}
              src={el}
              style={
                this.state.index == index
                  ? {
                      position: 'absolute',
                      left: `${600}px`,
                      transform: 'scale(1.5)',
                      'z-index': '1000',
                      transition: ' all 2s'
                    }
                  : { filter: 'blur(2px)' }
              }
            />
          ))}
        </div>
        <div className={styles.buttons}>
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
      </div>
    );
  }
}
export default Slider;
