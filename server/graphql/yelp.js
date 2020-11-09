const fetch = require("node-fetch");
const express = require("express");
const router = express.Router({ mergeParams: true });
const { RESTAURANT_DATA, BUSINESS_DATA } = require("./queries")

const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { createHttpLink } = require('apollo-link-http');

const URL = "https://api.yelp.com/v3/graphql"

const client = new ApolloClient({
    link: createHttpLink({
        uri: URL,
        fetch,
        headers: {
            "Authorization": `Bearer ${process.env.YELP_API_KEY}`,
        }
    }),
    cache: new InMemoryCache()
});

router.get("/business/search", (req, res) => {

    client.mutate({
        mutation: RESTAURANT_DATA,
        variables: req.query
    }).then(response => {
        let data = response.data.search.business[0];

        res.status(200).json({
            status: "success",
            data
        });
    }).catch(error => {
        console.log(error)
    })
})



// router.get("/business/search", (req, res) => {
//     console.log("")
//     console.log("")
//     fetch(URL, {
//         method: "POST",
//         headers: {
//             "Authorization": `Bearer ${process.env.YELP_API_KEY}`,
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(
//             {
//                 query: RESTAURANT_DATA,
//                 variables: req.body.variables
//             }
//         )
//     })
//         .then(result => {
//             return result.json();
//         })
//         .then(data => {
//             console.log("DATA Returned:\n", data);
//             res.send.data
//         })
// })

module.exports = router;
