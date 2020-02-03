const db = require('../config/dbconfig');

module.exports ={
    getProjects
    // addProjects,
    // editProjects,
    // removeProjects
}

function getProjects() {
    return db('projects')
}