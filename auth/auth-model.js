const db = require('../config/dbconfig.js');

module.exports = {
    findUsers
}

function findUsers() {
    return db('users')
}