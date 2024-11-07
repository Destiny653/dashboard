const userService = require('../services/user.service')
const admin = async(req, res, next)=>{
    const {tel} = req.body
    if(!tel || tel.length < 10){
        return res.status(400).json({error: 'Invalid phone number'})
    }
    const isUserId = await userService.getDataId('email', body.email, body.role)
    if(!isUserId){
        return res.status(400).json({error: true,
            message: 'User not found',
            isUserId  
        })
    }
    req.userId = isUserId
    next()
}
const instructor = async(req, res, next)=>{
    const {department}= req.body
    if(!department){
        return res.status(400).json({error: 'Invalid department'})
    }
    const isUserId = await userService.getDataId('email', body.email, body.role)
    if(!isUserId){
        return res.status(400).json({error: true,
            message: 'User not found',  
            isUserId
        })
    }
    req.userId = isUserId
    next()
}
const student = async(req, res, next)=>{
    const {level, enrollement_date}= req.body
    if(!level ||!enrollement_date){
        return res.status(400).json({error: 'Invalid level or enrollement date'})
    }
    const isUserId = await userService.getDataId('email', body.email, body.role)
    if(!isUserId){
        return res.status(400).json({error: true,
            message: 'User not found', 
            isUserId 
        })
    }
    req.userId = isUserId
    next()
}

module.exports = {admin, instructor, student}