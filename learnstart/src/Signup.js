import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

const styles = signup => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: signup.spacing.unit * 3,
    marginRight: signup.spacing.unit * 3,
    [signup.breakpoints.up(400 + signup.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: '6px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${signup.spacing.unit * 2}px ${signup.spacing.unit * 3}px ${signup.spacing.unit * 3}px`,
    height: "98%"
  },
  avatar: {
    margin: signup.spacing.unit,
    backgroundColor: signup.palette.secondary.main,
  },
  form: {
    width: '99%',
    marginTop: signup.spacing.unit
  },
  submit: {
    marginTop: signup.spacing.unit * 3
  },
  closeButton: {
    top: 0,
    right: 5,
    margin: 0,
    position: 'absolute',
    cursor: 'pointer'
  }
})

class Signup extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleBlur = (event) => {

  }

  render() {
    const { fullScreen, classes} = this.props

    return(
      <div>
        <Button className="text" onClick={this.handleOpen}>
          Sign Up
        </Button>
        <Dialog fullScreen={fullScreen}
          open={this.state.open}
          close={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          >
          <h3 className={classes.closeButton} onClick={this.handleClose}>x</h3>
          <CssBaseline />
          <Paper className={classes.paper + " border-radius-none"}>
            <Typography component="h3" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <Input id="email" name="email" autoComplete="email" autoFocus placeholder="Email" onBlur={this.handleBlur} required />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Input name="password" type="password" id="password" autoComplete="current-password" />
              </FormControl>
              <DialogActions>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit + ' background-teal border-radius-none'}>
                  Continue
                </Button>
              </DialogActions>
            </form>
          </Paper>
        </Dialog>

      </div>
    )
  }
}

export default withMobileDialog()(withStyles(styles)(Signup))
