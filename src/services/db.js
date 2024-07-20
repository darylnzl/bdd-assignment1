const mysql = require('mysql2');

const setting = {
    connectionLimit: 10, // Set limit to 10 connections
    host: 'localhost',
    user: 'root',
    password: 'qwerty96',
    database: 'Assignment1',
    dateStrings: true // Return date as string instead of Date object
};

const pool = mysql.createPool(setting);

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as ID', connection.threadId);
    connection.release();
});

module.exports = pool;