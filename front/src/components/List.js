import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MyCard from './Card';
import {Draggable, Droppable} from 'react-beautiful-dnd'
import RootRef from '@material-ui/core/RootRef';
import {List} from '@material-ui/core';

const styles = {
  column: {
    minWidth: 300
  },
  cards: {
    height: '100%'
  }
};


const MyList = (props) => {
  const {classes, list, index} = props;

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <RootRef rootRef={provided.innerRef}>
          <Card
            {...provided.draggableProps}
            className={classes.column}
          >
            <CardContent className={classes.cards}>
              <Typography variant="h5" component="h2" {...provided.dragHandleProps}>
                {list.title}
              </Typography>
              <Droppable droppableId={list.id} type="card">
                {
                  (provided) => (
                    <RootRef rootRef={provided.innerRef}>
                      <List
                        className={classes.cards}
                        {...provided.droppableProps}
                      >
                        {
                          list.cards.map((card, index) => (
                            <MyCard
                              key={card.id}
                              index={index}
                              card={card}
                            />
                          ))
                        }
                        {provided.placeholder}
                      </List>
                    </RootRef>
                  )
                }
              </Droppable>
            </CardContent>
          </Card>
        </RootRef>
      )}
    </Draggable>
  );
}

export default withStyles(styles)(MyList);
