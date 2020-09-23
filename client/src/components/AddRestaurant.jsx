import React, { useState } from "react";
import PriceRange from "./PriceRange";
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    addForm: {

    },
    formRow: {
        display: "flex",
        flexDirection: "row"
    }
}));

const AddRestaurant = () => {
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
                </div>
                <PriceRange onSetPrice={handleRestaurantPrice} />
            </div>

        </form>
    )
}

export default AddRestaurant;