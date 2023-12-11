const router = require('express').Router();
const cubeManager = require('../manager/cubeManager')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel } = req.body;

    cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel : Number(difficultyLevel)
    });

    res.redirect('/');
});

router.get('/:cubeId/details', (req, res) => {
    const currentCube = cubeManager.getOne(req.params.cubeId);
    res.render('details', {...currentCube});
})

module.exports = router;
