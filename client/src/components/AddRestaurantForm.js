import React, { useState, useContext } from "react";
import PriceRange from "./PriceRange";
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

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


const AddRestaurantForm = (props, ref) => {

    const classes = useStyles();
    const { addRestaurant } = useContext(RestaurantsContext);
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZip] = useState("")
    const [price, setRestaurantPrice] = useState("")
    const [foodType, setFoodType] = useState("")

    const handleRestaurantPrice = (price) => {
        setRestaurantPrice(price)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await RestaurantFinder.post("/", {
                name: name,
                street_address: address,
                city: city,
                zipcode: zipcode,
                price_range: price,
                food_type: foodType
            })

            addRestaurant(response.data.data.restaurant)
            props.isSubmitted()

        } catch (err) {
            console.log("Could not add a new restaurant: ", err)
        }
    }

    return (
        <form
            className={classes.addForm}
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div className={classes.formRow}>
                <div className="col">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="col">
                    <TextField
                        id="outlined-basic"
                        label="Street Address"
                        variant="outlined"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>

                <div className="col">
                    <TextField
                        id="outlined-basic"
                        label="City"
                        variant="outlined"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className="col">
                    <TextField
                        id="outlined-basic"
                        label="Zipcode"
                        variant="outlined"
                        value={zipcode}
                        onChange={e => setZip(e.target.value)}
                    />
                </div>
                <div className="col">
                    <TextField
                        id="outlined-basic"
                        label="Food Type"
                        variant="outlined"
                        value={foodType}
                        onChange={e => setFoodType(e.target.value)}
                    />
                </div>
                <div className="col">
                    <PriceRange onSetPrice={handleRestaurantPrice} />
                </div>

                <Button variant="contained" color="primary" type="submit">
                    Add Restaurant
                </Button>
            </div>


        </form>
    )
}

export default AddRestaurantForm;