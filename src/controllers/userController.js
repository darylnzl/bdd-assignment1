const userModel = require("../models/userModel");

var userController = {

    getAllUser: (req, res, next) => {


        const callback = (error, results, fields) => {

            if (error) {
                console.log("Error in getAllUser:", error);
                res.status(500).json(error);
            } else {
                res.status(200).json(results);
            }
        }

        userModel.selectAllUsers(callback);
    },

    getUserById: (req, res, next) => {

        const data = {
            admin_id: req.params.admin_id
        };

        const callback = (error, results, fields) => {

            if (error) {
                console.log("Error in getUserById:", error);
                res.status(500).json(error);
            } else {
                res.status(200).json(results);
            }
        }

        userModel.selectUserById(data, callback);
    },

    createNewUser: (req, res, next) => {

        const data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        };
        console.log(data);
        const callback = (error, results, fields) => {

            if (error) {
                console.log("Error in new user:", error);
                res.status(500).json(error);
            } else {
                res.status(201).json(results);
            }
        }

        userModel.insertNewUser(data, callback);
    },


    updateUser: (req, res, next) => {

        const data = {
            admin_id: req.params.admin_id,
            email: req.body.email,

            password: req.body.password
        };
        console.log(data);
        const callback = (error, results, fields) => {

            if (error) {
                console.log("Error in updating user:", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows == 0) {
                    res.status(404).json({ "Message": "User not found" })
                } else {
                    res.status(204).json(results);
                }
            }
        }

        userModel.updateUser(data, callback);
    },

    deleteUserById: (req, res, next) => {

        const data = {
            admin_id: req.params.admin_id
        };

        const callback = (error, results, fields) => {

            if (error) {
                console.log("Error in delete user:", error);
                res.status(500).json(error);
            } else {
                if (results.affectedRows == 0) {
                    res.status(404).json({ "Message": "User not found" })
                } else {
                    res.status(204).json(results);
                }
            }
        }

        userModel.deleteUser(data, callback);
    },

    loginUser: (req, res, next) => {

        const data = {
            email: req.body.email,
            password: req.body.password
        };
        console.log(data);
        const callback = (error, results, fields) => {

            if (error) {
                console.log("Error in authenticating user:", error);
                res.status(500).json(error);
            } else {
                if (results.length == 0) {
                    res.status(404).json({ "Message": "User not found" })
                } else {

                    res.locals.admin_id=results[0].admin_id;
                    res.locals.role=results[0].role;
                    res.locals.message="User authenticated";
                    
                    next();
                    //res.status(200).json(results);
                }
            }
        }

        userModel.loginUser(data, callback);
    }



}

module.exports = userController;