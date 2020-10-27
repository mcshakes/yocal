const gql = require('graphql-tag');

const RESTAURANT_DATA = gql` 
    query getRestaurantData($term: String, $location: String, $limit: Int) {
        search(
            term: $term,
            location: $location,
            limit: $limit
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
`;

const BUSINESS_DATA = gql`
    query getShit {
        business(id: "X3jQiR55HGBDPbePpUbzWQ") {
            name
            phone
          }
    }
`

module.exports = { RESTAURANT_DATA, BUSINESS_DATA }