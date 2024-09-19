const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin';
//  GET/
//  Admin - Login Page

router.get('/admin', async (req, res) => {
    try {
        const locals = {
            title: "Admin",
            description: ""
        }

        res.render('admin/index', { locals, layout: adminLayout });
    } catch (error) {
        console.log(error);
    }
});

//  POST/
//  Admin - Check Login


router.post('/admin', async (req, res) => {
    try {
       
        const {username, password} = req.body;

       



        // res.redirect('/admin');
        // res.render('admin/index', { locals, layout: adminLayout });
    } catch (error) {
        console.log(error);
    }
});


// router.post('/admin', async (req, res) => {
//     try {
       
//         const {username, password} = req.body;

//         res.redirect('/admin');




//         // res.render('admin/index', { locals, layout: adminLayout });
//     } catch (error) {
//         console.log(error);
//     }
// });




//  POST/
//  Admin - Register


router.post('/register', async (req, res) => {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)

      
        try {
            const user = await User.create({ username, password:hashedPassword });
            res.status(201).json({ message: 'User Created', user});
        } catch (error) {
            if(error.code === 11000) {
                res.status(409).json({ message: 'User already active'});
            }
            res.status(500).json({ message: 'Internal server error'});
            
        }



        // res.render('admin/index', { locals, layout: adminLayout });
    } catch (error) {
        console.log(error);
    }
});














module.exports = router;