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

router.post('/login', async (req, res, next) => {
    let { username, password } = req.body
    try {
        const [user] = await Auth.findBy({username})
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = buildToken(user)
            res.json({
                message: `Welcome, ${user.username}!`,
                token
            })
        } else {
            next({
                status: 401,
                message: 'invalid credentials'
            })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router