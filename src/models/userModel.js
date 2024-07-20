const pool = require('../services/db');

const userModel = {

    registerAdmin: (adminData, callback) => {
        const { name, email, password, role } = adminData;
        const SQL = 'INSERT INTO admins (name, email, password, role) VALUES (?, ?, ?, ?)';
        const values = [name, email, password, role];
        
        pool.query(SQL, values, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results.insertId); 
            }
        });
    },


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

 
    getAdminByEmail: (email, callback) => {
        const SQL = 'SELECT admin_id, name, email, role FROM admins WHERE email = ?';
        pool.query(SQL, [email], (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]); 
            }
        });
    },


};

module.exports = userModel;
