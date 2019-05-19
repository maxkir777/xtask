import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {ListItem} from '@material-ui/core';
import {Draggable} from 'react-beautiful-dnd';
import RootRef from '@material-ui/core/RootRef';

const styles = {
  card: {
    minWidth: 275,
  }
};

const MyCard = (props) => {
  const {classes, card, index} = props;

  return (
    <Draggable draggableId={card.id} index={index}>
      {
        (provided) => (
          <RootRef rootRef={provided.innerRef}>
            <ListItem
              {...provided.droppableProps}
              {...provided.dragHandleProps}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  {card.title}
                </Typography>
              </CardContent>
            </ListItem>
          </RootRef>
        )
      }
    </Draggable>
  );
}

export default withStyles(styles)(MyCard);
