const {status} = require("http-status");
const {jwt} = require("jsonwebtoken");
const User = require("../Models/user");
const wrapAsync = require("../utils/wrapAsync");
const expressError = require("../utils/expressError");
const userSchema = require("../Schema/userSchema");
const bcrypt = require("bcrypt");


const createUser = wrapAsync(async (req , res) => {
    const {name,username,email,password} = req.body;
    const { error } = userSchema.validate(req.body);
    if (error) {
      throw new expressError(status.NOT_IMPLEMENTED, error.details[0].message);
    }
    if(await User.findOne({$or : [{email} , {username}]})){
        throw new expressError(status.NOT_IMPLEMENTED, "username or email already exists");
    }
    const salt = await bcrypt.genSalt(10);  
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await new User({name,username,email,password:hashedPassword});
    await newUser.save();
    res.json({message : "user successfully registered"});
});

const loginUser = wrapAsync(async (req , res) => {
    
});
module.exports={createUser , loginUser};