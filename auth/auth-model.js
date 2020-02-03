const db = require('../config/dbconfig.js');

module.exports = {
    getUser
}

function getUser(filter) {
    return db('users').where(filter);
}