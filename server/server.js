require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const bodyParser = 'body-parser';
const yelpRouter = require("./graphql/yelp");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const restaurantRouter = require("./controllers/restaurants");

app.use(morgan("dev"));

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger)

app.use("/api/v1/yelp", yelpRouter);
app.use(restaurantRouter);

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    logger.info(`Server is up and listening on ${port}`)
})

// curl --request GET \
//   --url 'https://us1.locationiq.com/v1/search.php?key=TOKEN&q=4100%20Perry%20St%20Denver&format=json'