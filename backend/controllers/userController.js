const User = require('../models/user')

const addUser = (req, res) => {
    let newUser = new User
    newUser.rute = req.body.rut

    newUser.save((err, user) => {
        if(err){
            return res.status(400).send({message: "Error al registrar"})
        }
        return res.status(200).send(user)
    })
}

const getUser = (req, res) => {
    User.find({}, (err, user) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar los registros"})
        }
        return res.status(200).send(user)
    })
}

const getUserPow = (_req, res) => {
    User.find()
    .populate('rute')
    .exec((err, user) => {
        res.status(200).send({user})
    })
}

module.exports = {
    addUser,
    getUser,
    getUserPow
}