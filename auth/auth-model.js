const db = require('../config/dbconfig.js');

module.exports = {
    findUsers,
    getUser
}

function findUsers() {
    return db('users')
}

function getUser(filter) {
    return db('users').where(filter);
}