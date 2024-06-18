const pool = require('../services/db');

const adminModel = {
    login: (email, password, callback) => {
        const SQL = 'SELECT * FROM admins WHERE email = ? AND password = ?';
        const values = [email, password];
        pool.query(SQL, values, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results.length > 0);
            }
        });
    },

    addPhone:(data,callback)=>{

        const SQLStatement="insert into phones(name,brand_id,price,description) values(?,?,?,?)";
        const VALUES=[data.name,data.brand_id,data.price,data.description];

        pool.query(SQLStatement,VALUES,callback);

    },

    addBrand:(data,callback)=>{

        const SQLStatement="insert into brands(name) values(?)";
        const VALUES=[data.name];

        pool.query(SQLStatement,VALUES,callback);

    }

};