const fetch = require("node-fetch");
const express = require("express");
const router = express.Router({ mergeParams: true });
const { RESTAURANT_DATA } = require("./queries")

const URL = "https://api.yelp.com/v3/graphql"

router.get("/business/search", (req, res) => {
    console.log("FUCK")
    console.log(req.body)
    console.log("")
    fetch(URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
        },
        body: JSON.stringify(
            {
                query: RESTAURANT_DATA,
                variables: {}
            }
        )
    })
})

module.exports = router;
