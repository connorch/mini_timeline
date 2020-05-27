import React, { useState } from 'react';
import { Paper, makeStyles, Typography, TextField, Button, MenuItem, Grid } from '@material-ui/core';
import moment from 'moment';
import UrgencyLevels from '../getUrgencyLevels'

const AddLogForm = ({ addLog }) => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [urgency, setUrgency] = useState(UrgencyLevels[1]);

  const handleAddLog = () => {
    addLog(title, message, urgency, moment());
    setTitle('');
    setMessage('');
    setUrgency(UrgencyLevels[1]);
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4">Add new log.</Typography>
      <form className={classes.form} onSubmit={e => e.preventDefault()}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              label="Log Title"
              name="title"
              type="text"
              fullWidth
              className={classes.formField}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              select
              variant="outlined"
              fullWidth
              label="Urgency"
              value={urgency.id}
              onChange={e => setUrgency(UrgencyLevels[e.target.value])}
              style={{ backgroundColor: urgency.color }}
            >
              {UrgencyLevels.map(level => (
                <MenuItem key={level.id} value={level.id} style={{ backgroundColor: level.color }}>{level.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
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
          onChange={e => setMessage(e.target.value)}
        />
        <div className={classes.submitButton}>
          <Button variant="contained" type="submit" color="primary" onClick={handleAddLog}>
            Submit Log
          </Button>
        </div>
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
  },
  submitButton: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export default AddLogForm;