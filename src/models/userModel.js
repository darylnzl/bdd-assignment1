const pool = require('../services/db');

const userModel = {
    // Function to register a new admin
    registerAdmin: (adminData, callback) => {
        const { name, email, password, role } = adminData;
        const SQL = 'INSERT INTO admins (name, email, password, role) VALUES (?, ?, ?, ?)';
        const values = [name, email, password, role];
        
        pool.query(SQL, values, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results.insertId); // Return the ID of the inserted admin
            }
        });
    },

    // Function to login and validate credentials
    login: (email, password, callback) => {
        const SQL = 'SELECT * FROM admins WHERE email = ? AND password = ?';
        const values = [email, password];
        
        pool.query(SQL, values, (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results.length > 0); // Return true if credentials are valid
            }
        });
    },

    // Function to get admin details by email
    getAdminByEmail: (email, callback) => {
        const SQL = 'SELECT admin_id, name, email, role FROM admins WHERE email = ?';
        pool.query(SQL, [email], (error, results) => {
            if (error) {
                callback(error, null);
            } else {
                callback(null, results[0]); // Return the first result (should be unique by email)
            }
        });
    },

    // Add other CRUD operations as needed (updateAdmin, deleteAdmin, etc.)
};

module.exports = userModel;
