const {Schema, model} = require('mongoose');

const courseSchema = new Schema({
    level:{
        type: Schema.Types.ObjectId,
        ref: 'Level',
        required: true
    },
    course_title:{
        type: String,
        required: true,
        unique: true
    },
    course_description:{
        type: String,
        required: true
    },
    start_time:{
        type: Date,
        required: true
    },
    end_time:{
        type: Date,
        required: true
    }
},{timestamps:true})

module.exports = model('Course', courseSchema);