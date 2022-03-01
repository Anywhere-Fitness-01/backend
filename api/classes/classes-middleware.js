const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../secrets/index')

const restricted = (req, res, next) => {
    const token = req.headers.authorization
        if (token) {
            jwt.verify(token, JWT_SECRET, (err, decoded) => {
                if (err) {
                    next({
                        status: 401,
                        message: 'Token invalid'
                    })
                } else {
                    req.decodedJwt = decoded
                    next()
                }
            })
        } else {
            next({
                status: 401,
                message: 'Token required'
            })
        }
}

// WHY WON'T THIS WORK?!?!?!
const checkRole = (req, res, next) => {
    const { role } = req.body
    if (req.decodedJwt.role === 'instructor') {
        next()
    } else {
        next({
            status: 401,
            message: 'Only instructors are able to access this'
        })
    }
}

module.exports = {
    restricted,
    checkRole
}