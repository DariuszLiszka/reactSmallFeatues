import React from 'react';
import styles from './dynamic-button.module.css';
class DynamicBtn extends React.Component {
  state = {
    isHidden: false
  };
  toggleVisibilty = () => {
    this.setState({ isHidden: !this.state.isHidden });
    console.log(this.state);
  };
  render() {
    const { isHidden } = this.state;
    return (
      <div>
        <p className={`${isHidden ? `${styles.hidden}` : ''}`}>lorem ipsum.</p>
        <button onClick={this.toggleVisibilty}>
          {`${isHidden ? 'show' : 'hide'}`}
        </button>
      </div>
    );
  }
}

export default DynamicBtn;
