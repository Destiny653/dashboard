const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    level:{
        type: Schema.Types.ObjectId,
        ref: 'Level',
        required: true
    },
    enrollement_date:{
        type: Date,
        required: true
    }
},{timestamps:true})

module.exports = model('Student', studentSchema);