const db = require('../../data/db-config')

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users')
        .where(filter)
}

async function add(newUser) {
   const [id] = await db('users').insert(newUser, ['username', 'user_id', 'password', 'role'])
   return id
}

module.exports = {
    find,
    findBy,
    add
}