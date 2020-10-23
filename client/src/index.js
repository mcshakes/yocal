import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';

const cache = new InMemoryCache();
const link = createHttpLink({
    uri: "https://api.yelp.com/v3/graphql"
});

const client = new ApolloClient({
    // Provide required constructor fields
    cache: cache,
    link: link,
    headers: { Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}` },
    // Provide some optional constructor fields
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    ,
    document.getElementById("root"))