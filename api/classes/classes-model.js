const db = require('../../data/db-config')

function findClass() {
    return db('classes')
}

function findBy(filter) {
    return db('classes')
        .where(filter)
}

function findById(class_id) {
    return db('classes')
        .where('class_id', class_id)
        .first()
}

async function add(newClass) {
    const [class_id] = await db('classes').insert(['class_id', 'class_name', 'class_type', 'start_time', 'class_duration', 'intensity_level', 'location', 'registered_number', 'registered_max'])
    return class_id
}

async function update(class_id, classes) {
    await db('classes')
        .where('class_id', class_id)
        .update(classes)
    return findById(class_id)
}

function remove(class_id) {
    return db('classes')
        .where('class_id', class_id)
        .first()
        .del()
}

module.exports = {
    findClass,
    findBy,
    findById,
    add,
    update,
    remove
}