import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  unitHero: {
    backgroundColor: '#1C1C1C'
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
})

function HeroStories(props) {
  const { classes } = props
  return(
    <div className={classes.unitHero}>
      <div className={classes.heroContent}>
        <Typography component="h3" variant="h5" align="center" className="white-text">Stories</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(HeroStories)
