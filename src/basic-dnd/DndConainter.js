import React from 'react';
import Draggable from './Draggable';
import Dropable from './Dropable';
class DndContainer extends React.Component {
  render() {
    return (
      <div>
        <Dropable id='1'>
          <Draggable id='item1'>test</Draggable>
        </Dropable>
        <Dropable id='2'></Dropable>
      </div>
    );
  }
}
export default DndContainer;
