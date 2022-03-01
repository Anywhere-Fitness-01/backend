const router = require('express').Router()
const {
    restricted,
    checkRole
} = require('./classes-middleware')
const Class = require('./classes-model')

router.get('/', async (req, res, next) => {
    try {
        const getClasses = await Class.findClass()
        res.json(getClasses)
    } catch (err) {
        next(err)
    }
})

router.post('/', restricted, async (req, res, next) => {
    try {
        const createClass = await Class.add(req.body)
        res.status(201).json(createClass)
    } catch (err) {
        next(err)
    }
})

// checkRole mw not working
router.put('/:class_id', restricted, checkRole, async (req, res, next) => {
    const { class_id } = req.params
        try {
            const updateClass = await Class.update(class_id, req.body)
            res.status(201).json(updateClass)
        } catch (err) {
            next(err)
        }
})

router.delete('/:class_id', async (req, res, next) => {
    const { class_id } = req.params
        try {
            const removeClass = await Class.remove(class_id)
            res.json(removeClass)
        } catch (err) {
            next(err)
        }
})

module.exports = router