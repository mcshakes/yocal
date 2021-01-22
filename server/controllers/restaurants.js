const express = require("express");
const restaurantRouter = express.Router({ mergeParams: true });

const db = require("../db/index");

restaurantRouter.get("/api/v1/restaurants", async (req, res) => {

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

restaurantRouter.get("/api/v1/restaurants/:id", async (req, res) => {

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

restaurantRouter.post("/api/v1/restaurants", async (req, res) => {

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

restaurantRouter.put("/api/v1/restaurants/:id", async (req, res) => {
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

restaurantRouter.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])

        res.status(204).json({
            status: "success"
        })

    } catch (err) {
        console.log(err)
    }
})

module.exports = restaurantRouter;