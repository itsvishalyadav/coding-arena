const express = require("express");
const userRouter = express.Router();
const {createUser , loginUser} = require("../Controllers/userController");
userRouter.route("/register")
    .post(createUser);

userRouter.route("/login")
    .post(loginUser);
    
module.exports = userRouter;
