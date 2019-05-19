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
        const {getBoards} = this.props;
        getBoards()
    }

    render() {
        const {allUserBoards, classes} = this.props;


        const createBoard = (
            <Card className={classes.card}>
                <ButtonBase
                    className={classes.cardAction}

                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Add Board
                        </Typography>
                    </CardContent>
                </ButtonBase>
            </Card>
        )
        const listBoards = allUserBoards.map(board => (
            <Card className={classes.card}>
                <ButtonBase
                    className={classes.cardAction}
                    onClick={() => history.push(`/boards/${board.id}`)}
                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {board.title}
                        </Typography>
                    </CardContent>
                </ButtonBase>
            </Card>
        ));

        return (
            <>
                {listBoards}
                {createBoard}
            </>
        )
    }
}

export default withStyles(styles)(Boards);
//Todo call action
//onClick={() =>

//for test apiservices crete new method which create new board and post request on drf after dispatch into action

// создать новый экш который будет принимать имя и сначала вызывать аписерис createBoard и после аписервис getBoards а потом dispatch в редьюсер обновляет зановоо список боржов
