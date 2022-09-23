import pg from 'pg'

const pool = new pg.Pool({
    host: 'tiny.db.elephantsql.com',
    user: 'xlnbqnvc',
    database: 'xlnbqnvc',
    password: 'RlE5OMpfQbqYrlpUEpscYJJEpfZv_81N'
})



async function fetchAll(SQL, params = []) {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params)
        console.log(rows);
        return rows
    } catch (error) {
        console.log(error);
    } finally {
        client.release()
    }
}


export {
    fetchAll
}