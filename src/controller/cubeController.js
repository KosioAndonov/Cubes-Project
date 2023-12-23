const router = require('express').Router();
const cubeManager = require('../manager/cubeManager')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel } = req.body;

    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel : Number(difficultyLevel)
    });

    res.redirect('/');
});

router.get('/:cubeId/details', async (req, res) => {
    const currentCube = await cubeManager.getOne(req.params.cubeId).lean();
    res.render('detailsPage', {...currentCube});
});

module.exports = router;
