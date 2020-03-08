import React from 'react';
import styles from './heart.module.css';
function Heart() {
  let heartSrc =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/256px-A_perfect_SVG_heart.svg.png';
  return (
    <div>
      <img className={styles.heart} src={heartSrc} />
    </div>
  );
}
export default Heart;
