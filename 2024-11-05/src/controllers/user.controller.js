const userServices = require('../services/user.service')
const registerAdmin = (req, res) => {
    const { data } = req.body
    const id = req.userId._id
    const admin = userServices.registerAdmin(data, id)
    if (!admin) {
        return res.status(400).json(admin)
    }
    return res.status(201).json(admin)
}
const registerInstructor = (req, res) => {
    const {data} = req.body
    const id = req.userId._id
    const instructor = userServices.registerInstructor(data,id)
    if (!instructor) {
        return res.status(400).json(instructor)
    }
    return res.status(201).json(instructor)
}
const registerStudent = (req, res) => {
    const { data } = req.body
    const id = req.userId._id
    const student = userServices.registerStudent(data,id)
    if (!student) {
        return res.status(400).json(student)
    }
    return res.status(201).json(student)
}

module.exports = {
    registerAdmin,
    registerInstructor,
    registerStudent,
}