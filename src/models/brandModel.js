const pool = require('../services/db');


const brandModel = {
    addBrand:(data,callback)=>{

        const SQLStatement="insert into brands(name) values(?)";
        const VALUES=[data.name];

        pool.query(SQLStatement,VALUES,callback);

    },

    getAllBrands: (callback) => {
        const SQLStatement = "select * from brands";
        pool.query(SQLStatement, callback);
      }
}

module.exports = brandModel;