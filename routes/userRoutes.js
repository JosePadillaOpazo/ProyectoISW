const express = require('express')
const api = express.Router()
const userController = require('../controllers/userController')

api.post('/user', userController.addUser)
api.get('/users', userController.getUser)
api.get('/usersP', userController.getUserPow)
api.delete('/user/delete/:id', userController.delUser)

module.exports = api