const pool=require('../services/db');

var userModel={

    selectAllUsers:(callback)=>{

        const SQLStatement="select * from admins";
        pool.query(SQLStatement,callback);

    },

    selectUserById:(data,callback)=>{

        const SQLStatement="select * from admins where admin_id=?";
        const VALUES=[data.admin_id];
        pool.query(SQLStatement,VALUES,callback);

    },

    insertNewUser:(data,callback)=>{

        const SQLStatement="insert into admins(name,email,password,role) values(?,?,?,?)";
        const VALUES=[data.name,data.email,data.password,data.role];

        pool.query(SQLStatement,VALUES,callback);

    },

    updateUser:(data,callback)=>{

        const SQLStatement="update admins set email=?,password=? where admin_id=?";
        const VALUES=[data.email,data.password,data.admin_id];

        pool.query(SQLStatement,VALUES,callback);

    },

    
    deleteUser:(data,callback)=>{

        const SQLStatement="Delete from admins where admin_id=?";
        const VALUES=[data.admin_id];

        pool.query(SQLStatement,VALUES,callback);

    },


    loginUser:(data,callback)=>{

        const SQLStatement="Select * from admins where email=? and password=?";
        const VALUES=[data.email,data.password];

        pool.query(SQLStatement,VALUES,callback);

    }


}

module.exports=userModel;