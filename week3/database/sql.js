import mysql from "mysql2";
import { async } from "regenerator-runtime";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'class1',
        password: 'buttnine42#',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

const sql = {
    getUsers : async () => {
        const [rows] = await promisePool.query(`
            SELECT * FROM student
        `)

        return rows
    },
}
module.exports = sql