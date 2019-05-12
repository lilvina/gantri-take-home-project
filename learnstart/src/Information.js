import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  unit: {
    backgroundColor: '#E4E5E6',
    height: '200px',
  },
  contentInfo: {
    maxWidth: 526,
    margin: 'auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    textAlign: 'center'
  }
})

function Information(props) {
  const {classes} = props
  return(
    <div className={classes.unit}>
      <div className={classes.contentInfo}>
        <Typography component="h3" align="left" className="black-text">
          Smart tools for founders.
        </Typography>
        <Typography variant="h3" align="left" className="gray-text margin-top-10" paragraph>
          LearnStart is the simplest way for startup founders to discover inspiring stories from startup founders from all over the world, all in one place.
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(Information)
