import React from 'react';
import Modal from './Modal';
class ModalContainer extends React.Component {
  state = {
    modal_title: 'warning',
    modal_info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare, justo vitae hendrerit sollicitudin, neque libero venenatis arcu, ut sollicitudin nisi est eu dui. Aenean vulputate, ex sed condimentum hendrerit, diam arcu lacinia orci, sed vestibulum nunc ante consequat eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In id accumsan enim. Nunc vel leo tincidunt, facilisis orci a, tempor massa. Donec rutrum neque sit amet mi luctus fringilla. Praesent vel velit vestibulum, lacinia eros eget, semper sapien. Fusce maximus dolor ut tincidunt varius. Pellentesque fringilla, neque vel porta ornare, leo dolor euismod nunc, sed pulvinar nibh sem vitae justo. Morbi at tincidunt diam, nec dapibus quam.',
    isHidden: true
  };
  toggleModal = e => {
    if (e.target.id == 'toggle') {
      this.setState({ isHidden: !this.state.isHidden });
    }
  };
  render() {
    const { modal_info, modal_title, isHidden } = this.state;
    return (
      <div>
        <div
          onClick={this.toggleModal}
          id='toggle'
          className={`modal ${isHidden ? 'hidden' : ''}`}
        >
          <Modal
            title={modal_title}
            info={modal_info}
            toggle={this.toggleModal}
          />
        </div>
        <button id='toggle' onClick={this.toggleModal}>
          open
        </button>
      </div>
    );
  }
}

export default ModalContainer;
