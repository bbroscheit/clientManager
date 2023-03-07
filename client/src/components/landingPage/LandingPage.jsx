import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



function LandingPage() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <h1>Welcome to Exel Manager</h1>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Log In
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                    <AccountCircleIcon />
                        <h2 id="transition-modal-title">Log in</h2>
                        
                        <p id="transition-modal-description">Please enter your username and password</p>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="outlined-search" label="User" type="text" variant="outlined" />
                            <TextField id="outlined-search" label="Password" type="password" variant="outlined" />
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>


    )
}

export default LandingPage