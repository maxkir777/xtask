import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { history } from '../../store/configureStore'


const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SIghUp extends React.Component {
    state = {
        login: "",
        email: "",
        password1: "",
        password2: "",
    };

    handleSubmit = event => {
        event.preventDefault();

        const { registration } = this.props;
        console.log(this.state);
        registration(this.state.login, this.state.email, this.state.password1, this.state.password2)
            .then(() => {
                history.push('/')
            })
    };

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="login">Login</InputLabel>
                            <Input
                                autoFocus
                                id="login"
                                name="login"
                                autoComplete="login"
                                onChange={event => this.setState({login: event.target.value})}
                                value={this.state.login}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                name="email"
                                autoComplete="email"
                                onChange={event => this.setState({email: event.target.value})}
                                value={this.state.email}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password1"
                                type="password"
                                id="password1"
                                autoComplete="current-password1"
                                onChange={event => this.setState({password1: event.target.value})}
                                value={this.state.password1}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password2"
                                type="password"
                                id="password2"
                                autoComplete="current-password2"
                                onChange={event => this.setState({password2: event.target.value})}
                                value={this.state.password2}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

SIghUp.propTypes = {
    // TODO: write prop types
};

export default withStyles(styles)(SIghUp);
