import React, { useState } from "react";
import PriceRange from "./PriceRange";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';


const useStyles = makeStyles((theme) => ({
    addForm: {

    },
    formRow: {
        display: "flex",
        flexDirection: "row"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const AddModal = () => {
    const classes = useStyles();

    const [price, setRestaurantPrice] = useState("")
    const [open, setOpen] = React.useState(false);

    const handleRestaurantPrice = (price) => {
        setRestaurantPrice(price)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                Add Restaurant
            </Button>
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
                    <form className={classes.addForm} autoComplete="off">
                        <div className={classes.formRow}>
                            <div className="col">
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </div>
                            <div className="col">
                                <TextField id="outlined-basic" label="Street Address" variant="outlined" />
                            </div>

                            <div className="col">
                                <TextField id="outlined-basic" label="City" variant="outlined" />
                            </div>
                            <div className="col">
                                <TextField id="outlined-basic" label="Zipcode" variant="outlined" />
                            </div>
                            <div className="col">
                                <TextField id="outlined-basic" label="Food Type" variant="outlined" />
                            </div>
                            <div className="col">
                            </div>
                            <PriceRange onSetPrice={handleRestaurantPrice} />
                        </div>

                    </form>
                </Fade>
            </Modal>
        </div>
    )
}

export default AddModal;