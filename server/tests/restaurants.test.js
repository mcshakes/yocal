const { createTable, insertRestaurant, showAll, dropTable } = require("../db/db-utils");
const supertest = require("supertest");
const app = require("../server");

const api = supertest(app)

describe("Restaurant Service", () => {

    beforeAll(async() => {
        await createTable('test_restaurants')
        await insertRestaurant('test_restaurants', 'Pasta Joint', "3800 Perry St", "Denver", "80212", 3, "Italian, Noodles")
        await insertRestaurant('test_restaurants', 'Naan & Curry place', "1200 Testing St", "Fort Collins", "80212", 3, "Indian")

        // const mod = await import("../server")
        // server = mod
    })

    describe("fetch all restaurants", () => {
        
        test("response has proper data properties", async () => {
            const response = await api.get("/api/v1/restaurants")

            expect(response.body).toHaveProperty("status")
            expect(response.body).toHaveProperty("results")
            expect(response.body).toHaveProperty("data")
            
            expect(response.body.status).toBeString()
            expect(response.body.results).toBeNumber();
            expect(response.body.data.restaurants).toBeArray()
        })

        test("restaurants are returned as JSON", async () => {
            await api
                .get("/api/v1/restaurants")
                .expect(200)
                .expect('Content-Type', /application\/json/)
        })

        test("all restaurants are returned", async () => {
            const response = await api.get("/api/v1/restaurants")
            // expect(response.body).toBeInstance
            expect(response.body.data).not.toBeEmpty()
        })
    })

    afterAll(async () => {
        await dropTable()
    })
})