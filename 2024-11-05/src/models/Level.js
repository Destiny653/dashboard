const { Schema, model } = require('mongoose');

const levelSchema = new Schema({
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    },
    courses: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    levels: [
        {
            level: {
                type: String,
                enum:['Beginner', 'Intermediate', 'Advanced', 'Expert'],
                required: true
            },
            level_start_date:{
                type: Date,
                required: true
            },
            level_end_date: {
                type: Date,
                required: true
            },
            start_time:{
                type: new Date().toLocalTimeString(),
                required: true
            },
            end_time: {
                type: new Date().toLocalTimeString(),
                required: true
            }
        }
    ],
},{timestamps:true})

module.exports = model('Level', levelSchema);