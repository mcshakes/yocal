import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import BusinessData, { API_DEFAULT_PARAMS } from "../apis/BusinessData";
import { useQuery, gql } from '@apollo/client';

const RestaurantDetail = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)
  const [yelpData, setYelpData] = useState([])

  useEffect(() => {
    try {

      const fetchData = async () => {
        const response = await RestaurantFinder.get(`/${id}`)
        setSelectedRestaurant(response.data.data.restaurant)
      };

      fetchData()

    } catch (err) {
      console.log("Error Fetching Restaurants\n", err)
    }
  }, [])



  useEffect(() => {

    setTimeout(() => {

      if (selectedRestaurant != null) {
        try {
          const fetchRestaurantData = async () => {
            // let variables = {
            //   "term": "Shake Shack",
            //   "location": "Denver",
            //   "limit": 1
            // }

            const response = await BusinessData.get("/", {
              params: Object.assign(API_DEFAULT_PARAMS, { term: selectedRestaurant.name, location: selectedRestaurant.city })
            })

            setYelpData(response)
          };

          fetchRestaurantData()

        } catch (err) {
          console.log("Error Fetching Restaurants\n", err)
        }
      }

    }, 1000)


  }, [selectedRestaurant])


  return (

    <div>
      <h1>{selectedRestaurant && selectedRestaurant.name}</h1>

      <div>
      </div>
    </div>
  )
}

export default RestaurantDetail; 