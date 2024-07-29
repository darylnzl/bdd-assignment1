const pool = require('../services/db');

const phoneModel = {
    addPhone: (data, callback) => {
        const SQLStatement = "INSERT INTO phones (name, brand_id, price, description, imageURL) VALUES (?, ?, ?, ?, ?)";
        const VALUES = [data.name, data.brand_id, data.price, data.description, data.imageURL];
    
        pool.query(SQLStatement, VALUES, callback);
    },

    updatePhone: (data, callback) => {
        const SQLStatement = "UPDATE phones SET name=?, brand_id=?, price=?, description=?, imageURL=? WHERE phone_id=?";
        const VALUES = [data.name, data.brand_id, data.price, data.description, data.imageURL, data.phone_id];
    
        pool.query(SQLStatement, VALUES, callback);
    },

    getAllPhones: (callback) => {
        const SQLStatement = "SELECT * FROM phones";
        pool.query(SQLStatement, callback);
    },

    searchPhonesByNameOrBrand: (search, callback) => {
        const SQLStatement = `
            SELECT * 
            FROM phones 
            WHERE name LIKE ? 
            OR brand_id = ? 
            ORDER BY price ASC
        `;
        const likeQuery = `%${search}%`;
        pool.query(SQLStatement, [likeQuery, search], callback);
    },
};

module.exports = phoneModel;
