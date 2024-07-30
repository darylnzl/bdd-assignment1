const express = require('express');
const userController = require('../controllers/userController');
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const router = express.Router();


router.get("/",jwtMiddleware.verifyToken,jwtMiddleware.verifyAdminRole,userController.getAllUser);
router.get("/:admin_id",userController.getUserById);
router.post("/",userController.createNewUser);
router.put("/:admin_id",userController.updateUser);
router.delete("/:admin_id",userController.deleteUserById);
router.post("/login/",userController.loginUser,jwtMiddleware.generateToken,jwtMiddleware.sendToken);

module.exports = router;
