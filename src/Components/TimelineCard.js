import React from 'react';
import { Paper, Typography, makeStyles, Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TimelineCard = ({ title, message, moment, index, deleteLog }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{message}</Typography>
          <Typography variant="body2" className={classes.date}>{moment.format('MMMM Do YYYY, h:mm:ss a')}</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={() => deleteLog(index)}><DeleteIcon /></IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: 20,
    padding: 20,
  },
  date: {
    color: theme.palette.grey[600]
  }
}));

export default TimelineCard;