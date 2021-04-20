const db = require('../config/dbconfig');

module.exports ={
    getProjects,
    addProjects,
    editProjects
    // removeProjects
}

function getProjects() {
    console.log('hit');
    return db('projects')
}

function addProjects(project) {
    return db('projects').insert(project)
}
function editProjects(id, changes) {
    return db('projects')
        .where({ id })
        .update(changes);
}