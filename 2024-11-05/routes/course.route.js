const {Router} = require('express');
const router = Router();
const {registerCourse} = require('../src/middlewares/course.middleware')
const courseController = require('../src/controllers/course.controller')

     router.post('/create-course', registerCourse, courseController.createCourse)
     router.get('/get-course', courseController.getCourses)
     router.post('/update-course/:id', courseController.updateCourse)
     router.post('/delete-course/:id', courseController.deleteCourse)

module.exports = router