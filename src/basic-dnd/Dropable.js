import React from 'react';

class Dropable extends React.Component {
  drop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
  };
  allowDrop = e => {
    e.preventDefault();
  };
  render() {
    const { id } = this.props;
    return (
      <div
        style={{
          height: '100px',
          width: '100px',
          border: 'solid 1px',
          backgroundColor: 'red'
        }}
        onDrop={this.drop}
        onDragOver={this.allowDrop}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Dropable;
