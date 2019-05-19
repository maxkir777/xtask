import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MyCard from './Card';
import {Droppable} from 'react-beautiful-dnd'
import RootRef from '@material-ui/core/RootRef';
import {List} from '@material-ui/core';

const styles = {
  card: {
    minWidth: 275,
  }
};



const Column = (props) => {
  const {classes, list} = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {list.title}
        </Typography>
        <Droppable droppableId={list.id}>
          {
            (provided) => (
              <RootRef rootRef={provided.innerRef}>
                <List
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
  );
}

export default withStyles(styles)(Column);
