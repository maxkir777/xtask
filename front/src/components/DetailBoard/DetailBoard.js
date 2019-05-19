import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from '../Column';

class DetailBoard extends React.Component {
  componentDidMount() {
    const { fetchDetailBoard, match } = this.props;
    fetchDetailBoard(match.params.id)
  }

  onDragEnd = (result) => {
    console.log(result)
  };

  render() {
    const { boardInfo } = this.props;
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        {
          boardInfo.lists.map(list => {
            return <Column list={list} key={list.id}/>
          })
        }
      </DragDropContext>
    )
  }
}

export default DetailBoard;
