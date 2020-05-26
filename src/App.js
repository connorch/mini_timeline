import React from 'react';
import Timeline from './Components/Timeline';
import { makeStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Timeline />
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: blueGrey[900],
    minHeight: '100vh'
  }
}))

export default App;
