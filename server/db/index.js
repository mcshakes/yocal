const { Pool } = require("pg");

const pool = new Pool()
// auth and info is within env vars

module.exports = {
    query: (text, params) => pool.query(text, params),
}

