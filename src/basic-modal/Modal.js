import React from 'react';

class Modal extends React.Component {
  state = {
    modal_title: 'warning',
    modal_info: 'warning warning warning warrrrning.'
  };

  render() {
    const { title, info, toggle } = this.props;
    return (
      <div className='modal-content '>
        <div className='modal-title'>
          {title}
          <span id='toggle' className='close-button' onClick={toggle}>
            &times;
          </span>
        </div>

        <div className='modal-info'>{info}</div>
      </div>
    );
  }
}

export default Modal;
