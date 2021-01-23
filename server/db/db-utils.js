const { Client } = require('pg')

const getConnection = () => {
    return {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.TEST_PG_DB,
        port: 5432,
        password: null
    }
}

const createTable = async function (tableName) {
    const client = new Client(getConnection)

    await client.connect()

    return await client.query(
        `DROP TABLE IF EXISTS ${tableName};
            CREATE TABLE ${tableName} (
                id SERIAL PRIMARY KEY, 
                name VARCHAR(50) not null,
                street_address VARCHAR(50) not null,
                city VARCHAR(50) not null,
                zipcode VARCHAR(50) not null,
                price_range INTEGER not null,
                food_type VARCHAR(50) not null
                );
        `
        )
}

const insertRestaurant = async function (name, street_address, city, zipcode, price_range, food_type) {
    const client = new Client(getConnection())
    await client.connect()

    // return await client.query(`INSERT INTO ${tableName} (name, price) VALUES ('${itemName}', '${price}');`)
    return await client.query(`INSERT INTO test_restaurants (name, street_address, city, zipcode, price_range, food_type) values ($1, $2, $3, $4, $5, $6) returning *`,
            [name, street_address, city, zipcode, price_range, food_type]);
}

const showAll = async function (limit = 'ALL', columns = '*') {
    const client = new Client(getConnection())
    await client.connect()
  
    return await client.query(`SELECT ${columns} FROM test_restaurants LIMIT ${limit}`)
}

module.exports = {
    createTable,
    insertRestaurant,
    showAll
}