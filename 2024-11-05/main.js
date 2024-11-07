require('dotenv').config();
const express = require('express');
const {connect, connection} = require('mongoose');
const cors = require('cors'); 

// Connect to MongoDB
connect('process.env.DATABASE_URL')
.then(connection=>{
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));

    // Routes
    const authRoutes = require('./routes/auth.route');
    const courseRoutes = require('./routes/course.route');
    const userRoutes = require('./routes/user.route');

    app.use('/api/auth', authRoutes);
    app.use('/api/courses', courseRoutes);
    app.use('/api/users', userRoutes);

    app.use((req, res, next)=>{
        return res.status(404).json({
            status: 'NOT FOUND',
            status_code: 404,
            message: 'The requested resource was not found',
            data:{
                protocol: req.protocol,
                method: req.method.toUpperCase(),
                url: req.originalUrl,
                path: req.path,
                query: req.query,
                ip: req.ip, hostname,
                host: req.hostname,
                port: req.port,
                timestamp: new Date()
            }
        })
    })

    const status_code = error.status || 500;
    app.use((error, req, res, next)=>{
        return res.status(status_code).json({
            status: 'ERROR',
            status_code: status_code,
            message: error.message,
            data:{
                protocol: req.protocol,
                method: req.method.toUpperCase(),
                error: error.stack,
                url: req.originalUrl,
                path: req.path,
                query: req.query,
                ip: req.ip, hostname,
                host: req.hostname,
                port: req.port,
                timestamp: new Date()
            }
        })
    });


    app.listen(process.env.PORT, ()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch(error=>console.error('Error connecting to MongoDB:', error))
