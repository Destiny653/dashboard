const Admin = require('../models/Admin');
const Instructor = require('../models/Instructor');
const Student = require('../models/Student');


const getDataId = async (key, value, model)=>{
    try {
        const data = await model.findOne({[key]: value}).exec();
        if(result) {
            return {
                error: false,
                message: 'Data found',
                data
            }
        } else {
            return {
                error: true,
                message: 'Data not found'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}


const registerAdmin = async (data,id) => {
    try {
        const admin = new Admin({data, user:id});
        await admin.save();
        return {
            error: false,
            message: 'Admin registered successfully',
            data: admin
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const registerStudent = async (data,id) => {
    try {
        const student = new Student({data, user:id});
        await student.save();
        return {
            error: false,
            message: 'Student registered successfully',
            data: student
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const registerInstructor = async (data,id) => {
    try {
        const instructor = new Instructor({data, user:id});
        await instructor.save();
        return {
            error: false,
            message: 'Instructor registered successfully',
            data: instructor
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

module.exports = {
    registerAdmin,
    registerStudent,
    registerInstructor,
    getDataId  
};