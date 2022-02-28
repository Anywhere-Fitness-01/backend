const router = require('express').Router()
const bcrypt = require('bcryptjs')
const buildToken = require('./auth-token-builder')

const Auth = require('./auth-model')
const { BCRYPT_ROUNDS } = require('../secrets/index')

router.post('/register', async (req, res, next) => {
    const { username, password, role } = req.body
    const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS)
        try {
            const addUser = await Auth.add({ username, password: hash, role })
            res.status(201).json(addUser)
        } catch (err) {
            next(err)
        }
})

module.exports = router