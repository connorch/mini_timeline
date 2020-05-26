import React, { useState, useEffect } from 'react';
import { Paper, Typography, makeStyles, Grid, IconButton, Collapse } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const TimelineCard = ({ title, message, moment, index, deleteLog }) => {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Use expand transition on mount.
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use collapse transition before unmounting.
  const confirmDeletion = () => {
    setIsDeleteModalOpen(false);
    setIsVisible(false);
  };

  const closeModal = () => setIsDeleteModalOpen(false);

  return (
    <>
      <Collapse in={isVisible} onExited={() => deleteLog(index)}>
        <Paper className={classes.paper}>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="body1">{message}</Typography>
              <Typography variant="body2" className={classes.date}>{moment.format('MMMM Do YYYY, h:mm:ss a')}</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={() => setIsDeleteModalOpen(true)}><DeleteIcon /></IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Collapse>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        closeModal={closeModal}
        confirmDeletion={confirmDeletion}
      />
    </>
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