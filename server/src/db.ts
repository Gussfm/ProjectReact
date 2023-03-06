import mysql from 'mysql';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3307,
    password: 'login123',
    database: 'crud',
});