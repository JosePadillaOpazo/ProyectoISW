const express = require('express')
const api = express.Router()
const userController = require('../controllers/userController')
const checkRUT = require('../middlewares/checkRUT')

api.post('/user', userController.addUser)
api.get('/users', userController.getUser)
api.get('/usersP', userController.getUserPow)
api.delete('/user/delete/:id', userController.delUser)
api.post('/user/login', checkRUT)

module.exports = api
module.exports = api