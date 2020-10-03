import React, { useState, useEffect } from "react";
import AddModal from "../components/AddModal";
import { makeStyles } from '@material-ui/core/styles';
import RestaurantFinder from "../apis/RestaurantFinder";
import RestaurantList from "../components/RestaurantList"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Home = () => {
    const classes = useStyles();

    useEffect(() => {



        try {
            const fetchData = async () => {
                const response = await RestaurantFinder.get("/")
                console.log(response)
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
                <RestaurantList />

            </div>

        </div>
    )
}

export default Home; 