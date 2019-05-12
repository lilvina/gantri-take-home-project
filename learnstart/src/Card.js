import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '57%'
  },
  cardContent: {
    flexGrow: 1
  }
})

function Card(props) {
  const { classes, id, title, author } = props;
  return(
    <Grid item key={id} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia + " background-gray"}
          title="Image title"
        />
        <CardContent className={classes.CardContent + " background-lightgray"}>
          <Typography gutterBottom variant="h5" component="h2">
            {author}
          </Typography>
          <Typography>{title}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default withStyles(styles)(Card)
