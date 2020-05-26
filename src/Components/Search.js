import React from 'react';
import { Paper, TextField, makeStyles } from '@material-ui/core';

const Search = ({ searchFilter, setSearchFilter }) => {
  const classes = useStyles();

  const updateSearchFilter = e => {
    setSearchFilter(e.target.value);
  }

  return (
    <Paper className={classes.paper}>
      <TextField
        variant="outlined"
        label="Search for Logs"
        id="search"
        name="search"
        type="text"
        fullWidth
        className={classes.formField}
        value={searchFilter}
        onChange={updateSearchFilter}
      />
    </Paper>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    marginTop: 20,
    marginBottom: 40
  }
}));

export default Search;