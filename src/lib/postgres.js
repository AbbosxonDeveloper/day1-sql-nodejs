import pg from 'pg'
import { config } from './config.js'
console.log(config);

const pool = new pg.Pool(config)



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