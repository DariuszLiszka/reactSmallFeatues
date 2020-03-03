import React from 'react';
import styles from './modal.module.css';
class Modal extends React.Component {
  state = {
    modal_title: 'warning',
    modal_info: 'warning warning warning warrrrning.'
  };

  render() {
    const { title, info, toggle } = this.props;
    return (
      <div className={styles.modalContent}>
        <div className={styles.modalTitle}>
          {title}
          <span id={styles.toggle} onClick={toggle}>
            &times;
          </span>
        </div>

        <div className={styles.modalInfo}>{info}</div>
      </div>
    );
  }
}

export default Modal;
