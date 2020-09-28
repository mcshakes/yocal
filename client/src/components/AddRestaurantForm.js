import React, { useState } from "react";
import PriceRange from "./PriceRange";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    addForm: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "40%",
        borderRadius: "10px"
    },
    formRow: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& .col": {
            marginTop: ".5rem"
        },
        "& input": {
            width: "22rem"
        }
    }
}));


const AddRestaurantForm = () => {

    const classes = useStyles();

    const [price, setRestaurantPrice] = useState("")

    const handleRestaurantPrice = (price) => {
        setRestaurantPrice(price)
    }

    return (
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
                    <PriceRange onSetPrice={handleRestaurantPrice} />
                </div>
            </div>

        </form>
    )
}

export default AddRestaurantForm;