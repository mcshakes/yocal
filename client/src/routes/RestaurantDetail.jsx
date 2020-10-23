import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import Map from "../components/Map";

const RestaurantDetail = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await RestaurantFinder.get(`/${id}`)
                setSelectedRestaurant(response.data.data.restaurant)
            }
            fetchData()
        } catch (err) {
            console.log("Error Fetching Restaurants\n", err)
        }
    }, [])

    return (
        <div>
            <h1>{selectedRestaurant && selectedRestaurant.name}</h1>

            <div>
            </div>
        </div>
    )
}

export default RestaurantDetail; 