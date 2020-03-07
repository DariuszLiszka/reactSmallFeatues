import React from 'react';
import { useSpring, animated } from 'react-spring';

import styles from './loadingBar.module.css';

function LoadingBar() {
  const props = useSpring({
    from: { width: '0px' },
    to: { width: '100%' }
  });

  return (
    <div className={styles.loadingBar}>
      <animated.div className={styles.fill} style={props}>
        &nbsp;
      </animated.div>
    </div>
  );
}

export default LoadingBar;
