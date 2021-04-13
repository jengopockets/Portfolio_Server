const express = require('express');
const Projects = require('./project-model');
const router = express.Router();

const restricted = require('../auth/auth-middleware');

router.get('/projects', (req, res) => {
    console.log("hit");
    Projects.getProjects()
            .then((project) => {
                res.status(201).json(project)
            }).catch((err) => {
                res.status(500).json({message: "It's no working"})
            });
});

router.post('/', restricted, (req, res) => {
    const projectData = req.body;
    Projects.addProjects(projectData)
    .then((project) => {
        res.status(200).json(project)
    }).catch((err) => {
        res.status(500).json({message:'Project wasnt sent'})
    });
});

router.put('/:id', restricted, (req, res) => {
    const id = req.params.id
});



module.exports = router;