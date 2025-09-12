const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name : {
        type : String
    },
    username : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    role : {
        type : String,
        default : "user"
    },
    isVerified : {
        type : Boolean,
        default : false
    }
})

const User = new mongoose.model("User" , userSchema);
module.exports = User;