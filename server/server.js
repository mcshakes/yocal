require("dotenv").config();
const express = require("express");
const db = require("./db");

const morgan = require("morgan");
const e = require("express");
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/api/v1/restaurants", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM restaurants");

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        })
    } catch (err) {
        console.log(err)
    }

})

app.get("/api/v1/restaurants/:restaurantId", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"]
        }
    })
})

app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body)
})

app.put("/api/v1/restaurants", (req, res) => {
    console.log(req.params.id)
})

app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body)
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is up and listening on ${port}`)
})