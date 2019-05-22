import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import Column from '../List';
import {unstable_Box as Box} from '@material-ui/core/Box';
import RootRef from '@material-ui/core/RootRef';

class DetailBoard extends React.Component {
  componentDidMount() {
    const {fetchDetailBoard, match} = this.props;
    fetchDetailBoard(match.params.id)
  }

  onDragEnd = (result) => {
    const {onCardEdit, onListEdit, match} = this.props;
    const {destination, source, draggableId, type} = result;

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
    if (type === 'card') {
      onCardEdit(
        match.params.id,
        draggableId, {
          list: destination.droppableId,
          sort_order: destination.index
        })
    }


    if (type === 'list') {
      onListEdit(
        match.params.id,
        draggableId, {
          sort_order: destination.index
        })
    }
  };

  render() {
    const {boardInfo} = this.props;
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId="root" direction="horizontal" type="list">
          {(provided) => (
            <RootRef rootRef={provided.innerRef}>
              <Box
                {...provided.droppableProps}
                display="flex"
                flexDirection="row"
              >
                {
                  boardInfo.lists.map((list, index) => {
                    return <Column list={list} key={list.id} index={index}/>
                  })
                }
                {provided.placeholder}
              </Box>
            </RootRef>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default DetailBoard;
