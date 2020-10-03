import React, { useState, useEffect, useContext } from "react";
import AddModal from "../components/AddModal";
import { makeStyles } from '@material-ui/core/styles';
import RestaurantFinder from "../apis/RestaurantFinder";
import RestaurantList from "../components/RestaurantList"
import { RestaurantsContext } from "../context/RestaurantsContext";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Home = () => {
    const classes = useStyles();
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await RestaurantFinder.get("/")
                setRestaurants(response.data.data.restaurants)
            }
            fetchData()
        } catch (err) {
            console.log("Error Fetching All Restaurants\n", err)
        }
    }, [])


    return (
        <div>
            <div className="header">
                HOME!
            </div>
            <AddModal />
            <div className="list">
                <RestaurantList restaurants={restaurants} />

            </div>

        </div>
    )
}

export default Home; 