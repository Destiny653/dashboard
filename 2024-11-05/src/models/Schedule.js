const {Schema, model} = require('mongoose');
const Instructor = require('./Instructor');

const scheduleSchema = new Schema({
    course:{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true 
    },
    students:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        }
    ],
    Instructor:{
            type: Schema.Types.ObjectId,
            ref: 'Instructor',
            required: true
        }  
},{timestamps:true})

module.exports = model('Schedule', scheduleSchema);