const RESTAURANT_DATA = ` 
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

module.exports = { RESTAURANT_DATA }