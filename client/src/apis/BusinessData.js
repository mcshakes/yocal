import axios from "axios";

export const API_DEFAULT_PARAMS = {
    term: '',
    location: "",
    limit: 1
}


export default axios.create({
    baseURL: "http://localhost:3005/api/v1/yelp/business/search",
    headers: {
        "Content-Type": "application/json"
    }
})