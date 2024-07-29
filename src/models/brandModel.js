const pool = require('../services/db');


const brandModel = {
    addBrand:(data,callback)=>{

        const SQLStatement="insert into brands(name) values(?)";
        const VALUES=[data.name];

        pool.query(SQLStatement,VALUES,callback);

    },

    deleteBrand: (data, callback) => {
        const SQLStatement = "DELETE FROM brands WHERE brand_id = ?";
        const VALUES = [data.brand_id];
        pool.query(SQLStatement, VALUES, callback);
    },

    getAllBrands: (callback) => {
        const SQLStatement = "select * from brands";
        pool.query(SQLStatement, callback);
      }
}

module.exports = brandModel;