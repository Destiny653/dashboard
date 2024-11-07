const courseServices = require('../services/course.service')
const createCourse = (req, res)=>{
    const data = req.body
   const create = courseServices.createCourse(data)
   return create
}

const getCourses = async (req, res) => {
  const courses = await courseServices.readCourse()
  return  courses
}

const getCourseById = async (req, res) => {
    const id = req.params.id
    const course = await courseServices.getCourseById(id)
    return course
}
const deleteCourse = async (req, res)=>{
    const id = req.id
    const course = await courseServices.deleteCourse(id)
    return course
}

const updateCourse = async (req, res) => {
    const id = req.id
    const data = req.body
    const course = await courseServices.updateCourse(id, data)
    return course
}

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    deleteCourse,
    updateCourse,
 
}