import React, { useState } from 'react';
import TimelineCardForm from './AddLogForm';
import { makeStyles } from '@material-ui/core';

const Timeline = () => {
  const classes = useStyles();

  const [logs, setLogs] = useState([]);

  const addLog = (title, message) => {
    setLogs([
      ...logs,
      { title, message }
    ]);
  }

  return (
    <div className={classes.root}>
      <TimelineCardForm addLog={addLog} />
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: 100,
    [theme.breakpoints.down('xs')]: {
      padding: 10
    }
  }
}));

export default Timeline;