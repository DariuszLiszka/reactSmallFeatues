import React from 'react';
import Modal from './Modal';
class ModalContainer extends React.Component {
  state = {
    modal_title: 'warning',
    modal_info: 'warning warning warning warrrrning.',
    isHsidden: true
  };
  toggleModal = () => {
    this.setState({ isHidden: !this.state.isHidden });
    console.log(this.state);
  };
  render() {
    const { modal_info, modal_title, isHidden } = this.state;
    return (
      <div>
        <div className={`modal ${isHidden ? '' : 'hidden'}`}>
          <Modal
            title={modal_title}
            info={modal_info}
            toggle={this.toggleModal}
          />
        </div>
        <button>open</button>
      </div>
    );
  }
}

export default ModalContainer;
