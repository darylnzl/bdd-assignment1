const pool=require('../services/db');

var userModel={

    selectAllUsers:(callback)=>{

        const SQLStatement="select * from admins";
        pool.query(SQLStatement,callback);

    },

    selectUserById:(data,callback)=>{

        const SQLStatement="select * from admins where userid=?";
        const VALUES=[data.userid];
        pool.query(SQLStatement,VALUES,callback);

    },

    insertNewUser:(data,callback)=>{

        const SQLStatement="insert into admins(username,email,role,password) values(?,?,?,?)";
        const VALUES=[data.username,data.email,data.role,data.password];

        pool.query(SQLStatement,VALUES,callback);

    },

    updateUser:(data,callback)=>{

        const SQLStatement="update admins set email=?,password=? where userid=?";
        const VALUES=[data.email,data.password,data.userid];

        pool.query(SQLStatement,VALUES,callback);

    },

    
    deleteUser:(data,callback)=>{

        const SQLStatement="Delete from admins where userid=?";
        const VALUES=[data.userid];

        pool.query(SQLStatement,VALUES,callback);

    },


    loginUser:(data,callback)=>{

        const SQLStatement="Select * from admins where email=? and password=?";
        const VALUES=[data.email,data.password];

        pool.query(SQLStatement,VALUES,callback);

    }


}

module.exports=userModel;