import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import AddRestaurantForm from "./AddRestaurantForm";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const AddModal = (props) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [status, isModalSubmitted] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.addButton}>
            {!open &&
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                >
                    Add Restaurant
                </Button>
            }
            <Modal
                className={classes.formContainer}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <AddRestaurantForm isSubmitted={handleClose} />
                </Fade>
            </Modal>
        </div>
    )
}

export default AddModal;