const express = require('express');
const userController = require('../controllers/userController');
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const router = express.Router();


router.get("/",userController.getAllUser);
router.get("/:userid",userController.getUserById);
router.post("/",userController.createNewUser);
router.put("/:userid",userController.updateUser);
router.delete("/:userid",userController.deleteUserById);
router.post("/login/",userController.loginUser,jwtMiddleware.generateToken,jwtMiddleware.sendToken);

module.exports = router;
