import React from 'react';
import { Modal, Fade, Typography, Button, Paper, makeStyles } from '@material-ui/core';

const DeleteConfirmationModal = ({ isOpen, closeModal, confirmDeletion }) => {
  const classes = useStyles();

  return (
    <>
      <Modal open={isOpen}>
        <Fade in={isOpen}>
          <Paper className={classes.paper}>
            <Typography variant="h4"> Are you sure you want to delete? </Typography>
            <div className={classes.buttonGroup}>
              <Button color="secondary" onClick={closeModal}>Cancel</Button>
              <Button color="primary" onClick={confirmDeletion}>Confirm</Button>
            </div>
          </Paper>
        </Fade>
      </Modal>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    width: 500,
    maxWidth: '90%',
    margin: '0 auto',
    marginTop: 200,
    padding: 25,
    [theme.breakpoints.down('xs')]: {
      padding: 10
    },
    outline: 'none'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20
  },
}));

export default DeleteConfirmationModal;