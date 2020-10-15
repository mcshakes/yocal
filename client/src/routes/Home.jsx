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
    header: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    }
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

    const deleteRestaurant = async (id) => {
        try {
            const response = await RestaurantFinder.delete(`/${id}`)
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }))
        } catch (err) {
            console.log("Error Deleting Restaurant\n", err)
        }
    }


    return (
        <div>
            <div className={classes.header}>
                <h1>Yocal Clone</h1>
            </div>
            <AddModal />
            <div className="list">
                <RestaurantList restaurants={restaurants} removeRestaurant={deleteRestaurant} />
            </div>

        </div>
    )
}

export default Home; 