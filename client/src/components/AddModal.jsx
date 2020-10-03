import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import AddRestaurantForm from "./AddRestaurantForm";

const useStyles = makeStyles((theme) => ({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const AddModal = () => {
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
        <div>
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
                    <div className={classes.formContainer}>
                        <AddRestaurantForm isSubmitted={handleClose} />
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default AddModal;