const { createTable, insertRestaurant, showAll, dropTable } = require("../db/db-utils");
const supertest = require("supertest");
const app = require("../server");

const api = supertest(app)

describe("Restaurant Service", () => {

    // let server;

    beforeAll(async() => {
        await createTable('test_restaurants')
        await insertRestaurant('Pasta Joint', "3800 Perry St", "Denver", "80212", 3, "Italian, Noodles")
        await insertRestaurant('Naan & Curry place', "1200 Testing St", "Fort Collins", "80212", 3, "Indian")

        // const mod = await import("../server")
        // server = mod
    })

    describe("fetch all restaurants", () => {
        // Problem with this is we are always fetching a specific table in GET, so we need to bring in db-utils to our endpoints;
        
        test("restaurants are returned as JSON", async () => {
            await api
                .get("/api/v1/restaurants")
                .expect(200)
                .expect('Content-Type', /application\/json/)
        })
    })

    afterAll(async () => {
        await dropTable()
    })
})