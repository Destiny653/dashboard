const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum: ['Admin', 'Student', 'Instructor']
    }
},{timestamps:true})

module.exports = model('User', userSchema);