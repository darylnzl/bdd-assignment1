const express = require('express');
const userController = require('../controllers/userController');
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const router = express.Router();


router.get("/",jwtMiddleware.verifyToken,jwtMiddleware.verifyAdminRole,userController.getAllUser);
router.get("/:adminid",userController.getUserById);
router.post("/",userController.createNewUser);
router.put("/:adminid",userController.updateUser);
router.delete("/:adminid",userController.deleteUserById);
router.post("/login/",userController.loginUser,jwtMiddleware.generateToken,jwtMiddleware.sendToken);

module.exports = router;
