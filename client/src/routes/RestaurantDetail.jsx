import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";

const RestaurantDetail = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default RestaurantDetail; 