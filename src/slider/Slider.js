import React from 'react';
import classNames from 'classnames'

import styles from './slider.module.scss';

class Slider extends React.Component {
  state = {
    index: 2,
    images: [
      'https://static-cdn.123rf.com/images/v5/index-thumbnail/84170952-b.jpg',
      'https://dailyweb.pl/wp-content/uploads/2019/02/500px-1200x1200.jpg',
      'https://cdn-dcp.avt.pl/i/images/2/6/9/_src_18269-500px.jpg',
      'https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg',
      'https://i.wpimg.pl/730x0/m.fotoblogia.pl/karcz-6cb7d7a110be2853fe8504b0cb.jpg'
    ],

    animationEnd: false
  };

  prevSlide = () => {
    const images = [...this.state.images];
    const popped = images.pop();
    images.unshift(popped);

    this.setState({ 
      images,
      animationEnd: false
    });
  };

  nextSlide = () => {
    const images = [...this.state.images];
    const first = images.shift();
    images.push(first);

    this.setState({
      images,
      animationEnd: false
    });
  };

  onAnimationEnd = () => {
    this.setState({ animationEnd: true })
  }

  render() {
    const { images, animationEnd } = this.state

    const getCx = (isActive) => classNames(styles.slide, { 
      [styles.active]: !!isActive,
      [styles.inactive]: !isActive,

      [styles.anime]: animationEnd === false && !!isActive
    })

    return (
      <div>
        <div className={styles.sliderContainer}>
          {images.map((el, index) => (
            <img
              className={getCx(this.state.index === index)}
              onAnimationEnd={this.onAnimationEnd}
              src={el}
              alt=""
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
