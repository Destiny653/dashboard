const {Schema, model} = require('mongoose');

const instructorSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    department:{
        type: String,
        enum: ['Web development', 'Cyber security', 'Graphic design', 'Digital Marketting'],
        required: true
    }
},{timestamps:true})

module.exports = model('instructor', instructorSchema);