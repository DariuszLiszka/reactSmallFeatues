import React from 'react';
import { useSpring, animated } from 'react-spring';

import styles from './loadingBar.module.css';

function LoadingBar() {
  const props = useSpring({
    from: { width: '0' },
    to: { width: '100%' }
  });

  return (
    <animated.div className={styles.loadingBar}>
      <animated.div style={props}>{''} </animated.div>
    </animated.div>
  );
}

export default LoadingBar;
