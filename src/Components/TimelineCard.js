import React, { useState, useEffect } from 'react';
import { Paper, Typography, makeStyles, Grid, IconButton, Collapse } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TimelineCard = ({ title, message, moment, index, deleteLog }) => {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);

  // Use expand transition on mount.
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use collapse transition before unmounting.
  const handleDeleteLog = () => {
    setIsVisible(false);
  }

  return (
    <Collapse in={isVisible} onExited={() => deleteLog(index)}>
      <Paper className={classes.paper}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{message}</Typography>
            <Typography variant="body2" className={classes.date}>{moment.format('MMMM Do YYYY, h:mm:ss a')}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleDeleteLog}><DeleteIcon /></IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Collapse>
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