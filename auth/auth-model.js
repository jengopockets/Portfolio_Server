const db = require('../config/dbConfig.js');

module.exports = {
    findUsers
}

function findUsers() {
    return db('users')
}