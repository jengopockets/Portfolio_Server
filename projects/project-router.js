const express = require('express');
const Projects = require('./project-model');
const router = express.Router();

const restricted = require('../auth/auth-middleware');

router.get('/projects', (req, res) => {
    Projects.getProjects()
            .then((project) => {
                res.status(201).json(project)
            }).catch((err) => {
                res.status(500).json({message: "It's no working"})
            });
});

module.exports = router;