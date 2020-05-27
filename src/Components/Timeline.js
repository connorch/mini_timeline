import React, { useState } from 'react';
import TimelineCardForm from './AddLogForm';
import { makeStyles } from '@material-ui/core';
import TimelineCard from './TimelineCard';
import Search from './Search';
import fetchLogData from '../fetchLogData';

const Timeline = () => {
  const classes = useStyles();
  const [logs, setLogs] = useState(fetchLogData());
  const [searchFilter, setSearchFilter] = useState('');

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

  const getFilteredLogs = () => searchFilter.length > 0 ? logs.filter(({ title }) => title.includes(searchFilter)) : logs;

  return (
    <div className={classes.root}>
      <TimelineCardForm addLog={addLog} />
      <Search
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      {getFilteredLogs().map(({ title, message, moment }, index) => (
        <TimelineCard
          key={moment}
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
    padding: 50,
    maxWidth: 800,
    margin: '0 auto',
    [theme.breakpoints.down('xs')]: {
      padding: 10
    },
  }
}));

export default Timeline;