const pool = require("../services/db");

var publicModel = {
  getAllPhones: (callback) => {
    const SQLStatement = "select * from phones";
    pool.query(SQLStatement, callback);
  },

  searchPhonesByNameOrBrand: (query, callback) => {
    const SQLStatement = `
          SELECT * 
          FROM phones 
          WHERE name LIKE ? 
            OR brand_id = ? 
          ORDER BY price ASC
        `;
    const likeQuery = `%${query}%`;
    const VALUES = [likeQuery, query];
    pool.query(SQLStatement, VALUES, callback);
  },

  getAllBrands: (callback) => {
    const SQLStatement = "select * from brands";
    pool.query(SQLStatement, callback);
  }


};

module.exports = publicModel;
