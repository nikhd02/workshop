const express = require('express')

const userController = require('../controllers_/userController')
const userRoute = express.Router()

userRoute.route('/')
    .get(userController.getUser)
    .post(userController.addUser)

module.exports = userRoute;