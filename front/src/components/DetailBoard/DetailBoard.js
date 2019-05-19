import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from '../List';

class DetailBoard extends React.Component {
  componentDidMount() {
    const { fetchDetailBoard, match } = this.props;
    fetchDetailBoard(match.params.id)
  }

  onDragEnd = (result) => {
    const {onCardDrop, match} = this.props;
    const {destination, source, draggableId} = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

  console.log(result);
  onCardDrop(
    match.params.id,
    draggableId, {
    list: destination.droppableId,
    sort_order: destination.index
  })

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
