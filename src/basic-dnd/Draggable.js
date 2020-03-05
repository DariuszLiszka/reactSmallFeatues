import React from 'react';

class Draggable extends React.Component {
  drag = e => {
    const data = e.dataTransfer.setData('transfer', e.target.id);
  };
  noAllowDrag = e => {
    e.stopPropagation();
  };
  render() {
    const { id } = this.props;
    return (
      <div
        style={{ height: '100px', width: '100px', border: 'solid 1px' }}
        id={id}
        draggable='true'
        onDragStart={this.drag}
        onDragOver={this.noAllowDrag}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Draggable;
