const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema(
    {
        username:
        {type: String,
        required: true,
        unique: true,
        trim: true,
        minlength:3
        },
        email:
        {type: String,
        required:true,
        unique: true
        },
        password:{
        type: String,
        required:true,
        trim: true,
        minlength:6
        }
    }
)
const UsersModel = new mongoose.model('users', UsersSchema)
module.exports = UsersModel
