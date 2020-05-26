import React, { useState } from 'react';
import TimelineCardForm from './AddLogForm';
import { makeStyles } from '@material-ui/core';
import TimelineCard from './TimelineCard';

const Timeline = () => {
  const classes = useStyles();

  const [logs, setLogs] = useState([]);

  const addLog = (title, message, moment) => {
    setLogs([
      { title, message, moment },
      ...logs,
    ]);
  }

  const deleteLog = index => {
    const clone = [...logs];
    clone.splice(index, 1);
    setLogs(clone);
  }

  return (
    <div className={classes.root}>
      <TimelineCardForm addLog={addLog} />
      {logs.map(({ title, message, moment }, index) => (
        <TimelineCard
          key={index}
          title={title}
          message={message}
          moment={moment}
          index={index}
          deleteLog={deleteLog}
        />
      ))}
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