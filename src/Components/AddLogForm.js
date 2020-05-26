import React, { useState } from 'react';
import { Paper, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import moment from 'moment';

const AddLogForm = ({ addLog }) => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleAddLog = () => {
    addLog(title, message, moment());
    setTitle('');
    setMessage('');
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Add new log.</Typography>
      <form className={classes.form} onSubmit={e => e.preventDefault()}>
        <TextField
          variant="outlined"
          label="Log Title"
          name="title"
          type="text"
          fullWidth
          className={classes.formField}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Log Message"
          name="message"
          type="text"
          fullWidth
          multiline
          rows={6}
          rowsMax={16}
          className={classes.formField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" type="submit" color="primary" onClick={handleAddLog}>
          Submit Log
        </Button>
      </form>
    </Paper>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
  },
  form: {
    paddingTop: 10,
    paddingBottom: 10
  },
  formField: {
    marginBottom: 10
  }
}));

export default AddLogForm;