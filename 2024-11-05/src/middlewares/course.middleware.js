const registerCourse = (req, res, next)=>{
    const {course_title, court_description, start_time, end_time} = req.body
    if(!course_title ||!court_description ||!start_time ||!end_time){
        return res.status(400).json({message: 'All fields are required'})
    }
    next()
} 

module.exports = {
    registerCourse
}