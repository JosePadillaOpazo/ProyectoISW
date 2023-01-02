const User = require('../models/user')

const addUser = (req, res) => {
    let newUser = new User
    newUser.rut = req.body.rut

    newUser.save((err, user) => {
        if(err){
            return res.status(400).send({message: "Error al registrar"})
        }
        return res.status(200).send(user)
    })
}

const getUser = (_req, res) => {
    User.find({}, (err, user) => {
        if(err){
            return res.status(400).send({message: "Error al mostrar los registros"})
        }
        return res.status(200).send(user)
    })
}

const delUser = (_req, res) => {
    User.find({}, (err, user) => {
        if(err){
            return res.status(400).send({message: "Error al elimiar el registro"})
        }
        return res.status(200).send({user})
    })
}

const getUserPow = (_req, res) => {
    User.find()
    .populate('rut')
    .exec((err, user) => {
        res.status(200).send({user})
    })
}

module.exports = {
    addUser,
    getUser,
    getUserPow,
    delUser
}
module.exports = {
    addUser,
    getUser,
    getUserPow,
    delUser
}