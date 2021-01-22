const { createTable } = require("../db/db-utils");


describe('Database Utils', () => {
    describe('createTable', () => {
      it('should create the table in the database', async () => {
        const res = await createTable('restaurants_test')
        // because we just created the table, no rows should exist
        // the first res is actually the result from the DROP TABLE, so we take the second
        expect(res[1].rowCount).toBe.null
      })
    })
})