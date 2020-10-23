import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useQuery, gql } from '@apollo/client';

const RESTAURANT_DATA = gql`
{   
    query getRestaurantData($term: String, $location: String, $limit: Int) {
        search(
            term:"shake shack",
            location:"denver",
            limit: 1
          ) {
            business {
              coordinates {
                latitude
                longitude
              }
              categories {
                title
                alias
              }
              attributes {
                wheelchair_accessible {
                  name_code
                  value_code
                }
              }
              rating
              price
              review_count
              reviews {
                text
                rating
                time_created
              }
            }
          }
    }
    
  }
`;

const RestaurantDetail = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)
    const { loading, error, data } = useQuery(RESTAURANT_DATA);


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