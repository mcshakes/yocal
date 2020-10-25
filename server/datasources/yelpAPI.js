const { RESTDataSource } = require('apollo-datasource-rest');

class YelpAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.yelp.com/v3/graphql"
    }

    async getRestaurantData() {
        const response = await this.get("")
    }
}

module.exports = YelpAPI;