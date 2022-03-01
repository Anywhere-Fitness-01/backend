const router = require('express').Router()
const restricted = require('./classes-middleware')
const Class = require('./classes-model')

router.get('/', async (req, res, next) => {
    try {
        const getClasses = await Class.findClass()
        res.json(getClasses)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {

})

router.put('/:class_id', async (req, res, next) => {

})

router.delete('/:class_id', async (req, res, next) => {

})

module.exports = router