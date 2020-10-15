require("dotenv").config();
const express = require("express");
const db = require("./db");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.use(cors());
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

app.get("/api/v1/restaurants/:id", async (req, res) => {

    try {
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id])

        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })
    } catch (err) {
        console.log(err)
    }

})

app.post("/api/v1/restaurants", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO restaurants (name, street_address, city, zipcode, price_range, food_type) values ($1, $2, $3, $4, $5, $6) returning *",
            [req.body.name, req.body.street_address, req.body.city, req.body.zipcode, req.body.price_range, req.body.food_type]);

        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })

    } catch (e) {
        console.log(err)
    }
})

app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, street_address = $2, city = $3, zipcode = $4, price_range = $5, food_type = $6 where id = $7 returning *", [req.body.name, req.body.street_address, req.body.city, req.body.zipcode, req.body.price_range, req.body.food_type, req.params.id])

        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })

    } catch (err) {
        console.log(err)
    }
})

app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])

        res.status(204).json({
            status: "success"
        })

    } catch (err) {
        console.log(err)
    }
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is up and listening on ${port}`)
})