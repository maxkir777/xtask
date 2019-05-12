import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {history} from '../../store/configureStore';


const styles = {
  card: {
    maxWidth: 345,
    marginBottom: 10
  },
  media: {
    height: 140,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    width: '100%',
    height: '100%'
  }
};

class Boards extends React.Component {
  componentDidMount() {
    const { getBoards } = this.props;
    getBoards()
  }

  render() {
    const {allUserBoards, classes} = this.props;

    const listBoards = allUserBoards.map(board => (
      <Card className={classes.card}>
        <ButtonBase
          className={classes.cardAction}
          onClick={() => history.push(`/boards/${board.id}`)}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {board.name}
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    ));

    return (
      listBoards
    )
  }
}

export default withStyles(styles)(Boards);
